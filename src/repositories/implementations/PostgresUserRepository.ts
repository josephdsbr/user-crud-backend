import { Address, User } from "../../entities";
import { User as IUser, UserAttributes, UserModel } from "../../models/IUser";
import { ComparePassword } from "../../utils/HashPasswordUtil";
import { IUserRepository } from "../IUserRepository";

export class PostgresUserRepository implements IUserRepository {
    findById(id: number): Promise<UserModel> {
        return User.findOne({
            where: {id},
            attributes: ['id', 'name', 'phone', 'email', 'createdAt', 'updatedAt'],
            include: [
                {
                    model: Address,
                    attributes: ['id', 'street', 'number', 'complement', 'district', 'zipCode', 'city', 'state' ] 
                }
            ]
        });
    }

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
        return await User.create(user, { include: [ { model: Address, as: 'address' } ],});
    }
}