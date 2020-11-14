import jwt from 'jsonwebtoken';

export const GenerateToken = (data: Object, secret: string) => jwt.sign(data, secret);