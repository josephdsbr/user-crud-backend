import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { Request, Response } from 'express';
import { IUpdateUserDTO } from "./UpdateUserDTO";
import { UserModel } from "../../models/IUser";

export class UpdateUserController {
    constructor(
        private updateUserUseCase: UpdateUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const params: IUpdateUserDTO = request.body;
            const user: UserModel = await this.updateUserUseCase.execute(params);
            return response.status(200).send(user);
        } catch (err) {
            return response.status(400).json({ error: err.message || 'Unexpected Error' });
        }
    }
}