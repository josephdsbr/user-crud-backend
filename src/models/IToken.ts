import { Request } from 'express';

interface IGetUserAuthInfoRequest extends Request {
    userId: number;
}

interface ITokenObjects {
    id: number;
}

export { IGetUserAuthInfoRequest, ITokenObjects };