import { User } from "../../entities";
import { User as IUser, UserAttributes, UserModel } from "../../models/IUser";
import { ComparePassword } from "../../utils/HashPasswordUtil";
import { IUserRepository } from "../IUserRepository";

export class PostgresUserRepository implements IUserRepository {
    findByEmailAndPassword(email: string, password: string): Promise<UserModel> {
        return User.findOne({ where: { email } }).then(user => {
            if (ComparePassword(user.password, password)) {
                return user;
            } else {
                throw new Error('Password is incorrect');
            }
        }).catch(err => {
            console.error(err);
            throw new Error('User not found')
        })
    }

    findByEmail (email: string): Promise<UserModel> {
        return User.findOne({ where: { email } });
    }
    
    async save(user: UserAttributes): Promise<UserModel> {
        return await User.create(user);
    }
}