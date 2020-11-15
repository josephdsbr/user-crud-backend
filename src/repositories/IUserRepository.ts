import { User, UserAttributes, UserModel } from "../models/IUser";
import { IUpdateUserDTO } from "../useCases/UpdateUser/UpdateUserDTO";

export interface IUserRepository {
    findByEmailAndPassword(email: string, password: string): Promise<UserModel>;
    findByEmail(email: string): Promise<UserModel>;
    existsByEmail(email: string): Promise<boolean>;
    findById(id: number): Promise<UserModel>;
    save(user: UserAttributes): Promise<UserModel>;
    update(user: UserModel, data: IUpdateUserDTO): Promise<UserModel>;
}