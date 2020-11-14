import { Request, Response } from 'express';
import { User, UserModel } from '../../models/IUser';
import { ICreateUserRequestDTO } from './CreateUserDTO';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const params: ICreateUserRequestDTO = request.body;
            const user: UserModel = await this.createUserUseCase.execute(params);
            return response.status(201).send(user);
        } catch (err) {
            return response.status(400).json({ error: err.message || 'Unexpected Error' })
        }
    }
}