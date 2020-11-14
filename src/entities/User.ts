import { DataTypes, Model, ModelAttributes } from "sequelize";
import { UserAttributes } from "../models/IUser";
import { CryptPassword } from "../utils/HashPasswordUtil";

export default class User extends Model<UserAttributes> implements UserAttributes {
    public email: string;
    public password: string;
    public hashedPassword: string;
    public name: string;
    public phone: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.beforeCreate(user => {
    user.hashedPassword = CryptPassword(user.password);
})

const userAttributes: ModelAttributes<User, UserAttributes> = {
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    name: DataTypes.STRING,
    phone: DataTypes.STRING
}

export { userAttributes };