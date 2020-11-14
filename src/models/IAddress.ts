import { Optional } from 'sequelize';

export interface AddressAttributes {
    userId: number;
    street: string;
    number: string;
    complement?: string;
    district: string;
    zipCode: string;
    city: string;
    state: string;
}