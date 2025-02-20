import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// Types
export interface LoginCredentials {
    username: string;
    password: string;
}

export interface User {
    id: number;
    username: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}

export type NewsType = 'neuigkeiten' | 'releases' | 'frameworks' | 'ankündigungen';

export interface NewsUpdate {
    id?: number;
    title: string;
    content: string;
    type: NewsType;
    version?: string;
    published_at?: string | Date;
    updated_at?: string | Date;
}

// API Configuration
const isDevelopment = process.env.NODE_ENV === 'development';

const API_BASE_URL = isDevelopment 
    ? 'http://localhost:3001/api'
    : 'http://178.254.26.117:45600/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// CSRF token management
let csrfToken: string | null = null;
let csrfPromise: Promise<string> | null = null;

const getCsrfToken = async (): Promise<string> => {
    // If we already have a token, return it
    if (csrfToken) {
        return csrfToken;
    }

    // If we're already fetching a token, return the existing promise
    if (csrfPromise) {
        return csrfPromise;
    }

    // Create new promise to fetch token
    csrfPromise = new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get<{ csrfToken: string }>(`${API_BASE_URL}/csrf-token`, {
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });
            csrfToken = response.data.csrfToken;
            resolve(csrfToken);
        } catch (error) {
            console.error('Failed to get CSRF token:', error);
            reject(error);
        } finally {
            csrfPromise = null;
        }
    });

    return csrfPromise;
};

// Request interceptor to add auth token and CSRF token
api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
    // Add auth token
    const token = localStorage.getItem('auth_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    // Add CSRF token for non-GET requests
    if (config.method && config.method.toLowerCase() !== 'get') {
        try {
            const token = await getCsrfToken();
            config.headers['CSRF-Token'] = token;
            config.headers['X-XSRF-TOKEN'] = token;
        } catch (error) {
            console.error('Failed to add CSRF token:', error);
            throw error; // Re-throw to prevent the request from proceeding without CSRF token
        }
    }

    return config;
});

// Authentication Service
export const authService = {
    async login(credentials: LoginCredentials): Promise<AuthResponse> {
        const response = await api.post('/auth/login', credentials);
        const { token, user } = response.data;
        localStorage.setItem('auth_token', token);
        return { token, user };
    },

    logout(): void {
        localStorage.removeItem('auth_token');
        csrfToken = null;
    },

    isAuthenticated(): boolean {
        return !!localStorage.getItem('auth_token');
    },

    async verifyToken(): Promise<boolean> {
        try {
            await api.get('/auth/verify');
            return true;
        } catch (error) {
            return false;
        }
    },
};

// News Service
export const newsService = {
    async getAll(type?: NewsType): Promise<NewsUpdate[]> {
        const params = type ? { type } : undefined;
        const response = await api.get('/news', { params });
        return response.data.data;
    },

    async getById(id: number): Promise<NewsUpdate> {
        const response = await api.get(`/news/${id}`);
        return response.data.data;
    },

    async create(news: Omit<NewsUpdate, 'id' | 'published_at' | 'updated_at'>): Promise<NewsUpdate> {
        const token = await getCsrfToken();
        const response = await api.post('/news', news, {
            headers: { 'CSRF-Token': token }
        });
        return response.data.data;
    },

    async update(id: number, news: Partial<NewsUpdate>): Promise<NewsUpdate> {
        const token = await getCsrfToken();
        const response = await api.put(`/news/${id}`, news, {
            headers: { 'CSRF-Token': token }
        });
        return response.data.data;
    },

    async delete(id: number): Promise<void> {
        const token = await getCsrfToken();
        await api.delete(`/news/${id}`, {
            headers: { 'CSRF-Token': token }
        });
    }
};

// Error handling
export class ApiError extends Error {
    constructor(
        message: string,
        public status?: number,
        public code?: string
    ) {
        super(message);
        this.name = 'ApiError';
    }
}

// Add response interceptor to handle CORS errors
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Response Error:', error.response.data);
            console.error('Status:', error.response.status);
            console.error('Headers:', error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('Request Error:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default api; 