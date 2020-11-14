import { UserDetailsUseCase } from "./UserDetailsUseCase";
import { Request, Response } from 'express';
import { IUserDetailsDTO } from "./UserDetailsDTO";
import { UserModel } from "../../models/IUser";

export class UserDetailsController {
    constructor(
        private userDetailsUseCase: UserDetailsUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const user: UserModel = await this.userDetailsUseCase.execute({ id: Number(id) });
            return response.status(200).send(user);
        } catch (err) {
            return response.status(400).json({ error: err.message || 'Unexpected Error' });
        }
    }
}