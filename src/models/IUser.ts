import { Optional } from 'sequelize';

export interface UserAttributes {
    name: string;
    hashedPassword: string;
    email: string;
    phone: string;
}