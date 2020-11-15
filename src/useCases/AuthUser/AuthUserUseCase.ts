import { UserModel, UserWithTokenModel } from "../../models/IUser";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ComparePassword } from "../../utils/HashPasswordUtil";
import { IAuthUserDTO } from "./AuthUserDTO";
import authConfig from '../../config/AuthConfig'
import { GenerateToken } from "../../utils/JwtUtil";

export class AuthUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ) {}

    async execute(data: IAuthUserDTO): Promise<UserWithTokenModel> {
        const { email, password } = data;

        const user = await this.userRepository.findByEmail(email);
    
        if (!user) {
            throw new Error('User doesn\'t exists.');
        }

        const isPasswordCorrect = await ComparePassword(user.password, password);

        if (!isPasswordCorrect) {
            throw new Error('Password doesn\'t match');
        }

        const token = await GenerateToken({ id: user.id }, authConfig.secret);

        return { id: user.id, email: user.email, name: user.name, phone: user.phone, token, createdAt: user.createdAt, updatedAt: user.updatedAt, address: user.address };
    }
}