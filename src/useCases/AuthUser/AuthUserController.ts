import { Request, Response } from 'express';
import { User, UserModel, UserWithTokenModel } from '../../models/IUser';
import { IAuthUserDTO } from './AuthUserDTO';
import { AuthUserUseCase } from './AuthUserUseCase';

export class AuthUserController {
    constructor(
        private authUserUseCase: AuthUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const params: IAuthUserDTO = request.body;
            const user: UserWithTokenModel = await this.authUserUseCase.execute(params);
            return response.status(200).send(user);
        } catch (err) {
            return response.status(400).json({ error: err.message || 'Unexpected Error' })
        }
    }
}