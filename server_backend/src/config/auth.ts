import jwt from 'jsonwebtoken';
import { User } from '../models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'sesa_news_2024_secure_key_9a8b7c6d5e4f3g2h1i';
const TOKEN_EXPIRATION = '10m';

export interface TokenPayload {
    userId: number;
    username: string;
}

export const generateToken = (user: User): string => {
    const payload: TokenPayload = {
        userId: user.id,
        username: user.username
    };
    
    return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRATION });
};

export const verifyToken = (token: string): TokenPayload => {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
}; 