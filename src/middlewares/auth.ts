import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import authConfig from '../config/auth';
import { IGetUserAuthInfoRequest, ITokenObjects } from '../models/IToken';

const jwtAuthenticationMiddleware = (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        return res.status(401).send({ error: 'No token provided.' });
    }

    const parts = authHeader.split(' ');

    if (!(parts.length === 2)) {
        return res.status(401).send({ error: 'Token error.' });
    }

    const [scheme, token] = parts;
    
    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ error: 'Token poorly formatted.' })
    }

    jwt.verify(token, authConfig.secret, (err, decoded: ITokenObjects) => {
        if (err) return res.status(401).send({ error: 'Invalid Token' });

        req.userId = decoded.id;
        return next();
    });
}