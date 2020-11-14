import { UserAttributes, UserModel } from "../models/IUser";

export interface IUserRepository {
    findByEmailAndPassword(email: string, password: string): Promise<UserModel>;
    findByEmail(email: string): Promise<UserModel>;
    findById(id: number): Promise<UserModel>;
    save(user: UserAttributes): Promise<UserModel>;
}