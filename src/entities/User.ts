import { DataTypes, ModelAttributes, Sequelize } from 'sequelize';
import { UserStatic } from '../models/IUser';
import { CryptPassword } from '../utils/HashPasswordUtil';

export function UserFactory (sequelize: Sequelize): UserStatic {
    return <UserStatic> sequelize.define('users', attributes, options)
}

const attributes: ModelAttributes = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}

const options = {
    hooks: {
        async beforeSave(user) {
            const password = user.getDataValue('password')
            const encryptedPassword = await CryptPassword(password);
            user.setDataValue('password', encryptedPassword);
        }
    }
};