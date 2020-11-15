import { UserAttributes, UserModel } from "../../models/IUser";
import { IUserRepository } from "../../repositories/IUserRepository";
import { IUpdateUserDTO } from "./UpdateUserDTO";

export class UpdateUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ) {}

    async execute(data: IUpdateUserDTO): Promise<UserModel> {
        const { id, email } = data;
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new Error('User doesn\'t exist');
        }

        if (user.email !== email) {
            if (this.userRepository.existsByEmail(email)) {
                throw new Error(`There is an User registered with the e-mail: ${data.email}`)
            }
        }

        return await this.userRepository.update(user, data);
    }
}