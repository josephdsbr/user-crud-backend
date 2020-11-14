import { UserModel } from "../../models/IUser";
import { IUserRepository } from "../../repositories/IUserRepository";
import { IUserDetailsDTO } from "./UserDetailsDTO";

export class UserDetailsUseCase {
    constructor (
        private userRepository: IUserRepository
    ) {}

    async execute(data: IUserDetailsDTO): Promise<UserModel> {
        const { id } = data;

        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new Error('User doesn\'t exist.');
        }

        return user;
    }
}