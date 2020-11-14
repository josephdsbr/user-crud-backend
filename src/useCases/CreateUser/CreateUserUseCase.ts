import { User, UserAttributes, UserModel } from "../../models/IUser";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ) {}

    async execute(data: ICreateUserRequestDTO): Promise<UserModel> {
        const { email, password, name, phone } = data;
        const userAlreadyExists = await this.userRepository.findByEmail(email);
    
        if (userAlreadyExists) {
            throw new Error('User already exists.');
        }

        const user: UserAttributes =  { email, phone, name, password };

        return await this.userRepository.save(user);
    }
}