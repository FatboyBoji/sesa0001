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
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
});

// Request interceptor to add auth token
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// CSRF token management
let csrfToken: string | null = null;

const getCsrfToken = async (): Promise<string> => {
    if (!csrfToken) {
        const response = await api.get<{ csrfToken: string }>('/csrf-token');
        csrfToken = response.data.csrfToken;
    }
    return csrfToken as string;
};

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

// Response interceptor for error handling
api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: unknown) => {
        if (axios.isAxiosError(error) && error.response) {
            const { data, status } = error.response;
            throw new ApiError(
                data.error || 'An error occurred',
                status,
                data.code
            );
        }
        throw new ApiError('Network error');
    }
);

export default api; 