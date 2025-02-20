import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import csurf from 'csurf';
import expressSanitizer from 'express-sanitizer';
import authRoutes from './routes/auth';
import newsRoutes from './routes/news';
import path from 'path';

// Extend Express Request type to include csrfToken
declare global {
    namespace Express {
        interface Request {
            csrfToken(): string;
        }
    }
}

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// CORS configuration
const corsOptions = {
    origin: process.env.NODE_ENV === 'production' 
        ? ['https://sesa-web.com', 'https://admin.sesa-web.com'] 
        : ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'CSRF-Token', 'X-Requested-With'],
    exposedHeaders: ['Content-Range', 'X-Content-Range'],
    credentials: true,
    maxAge: 86400, // 24 hours
    preflightContinue: false,
    optionsSuccessStatus: 204
};

// Apply CORS before other middleware
app.use(cors(corsOptions));

// Security Headers - configure helmet to work with CORS
app.use(helmet({
    crossOriginResourcePolicy: {
        policy: process.env.NODE_ENV === 'production' ? 'same-origin' : 'cross-origin'
    },
    crossOriginOpenerPolicy: {
        policy: process.env.NODE_ENV === 'production' ? 'same-origin' : 'unsafe-none'
    }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressSanitizer());

// Cookie parser is required for CSRF
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false
});

// Apply rate limiting to all routes
app.use(limiter);

// CSRF protection with updated configuration
const csrfProtection = csurf({
    cookie: {
        key: '_csrf',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax'
    }
});

// Apply CSRF protection selectively
app.use((req, res, next) => {
    // Skip CSRF for login and public routes
    if (req.path.startsWith('/api/auth/') || req.method === 'GET') {
        next();
    } else {
        csrfProtection(req, res, next);
    }
});

// Provide CSRF token
app.get('/api/csrf-token', csrfProtection, (req, res) => {
    res.json({ csrfToken: req.csrfToken() });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something broke!' });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});