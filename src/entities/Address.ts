import { DataTypes, Model, ModelAttributes } from 'sequelize';
import { AddressAttributes } from "../models/IAddress";

export class Address extends Model<AddressAttributes> implements AddressAttributes {
    public userId: number;
    public street: string;
    public number: string;
    public complement?: string;
    public district: string;
    public zipCode: string;
    public city: string;
    public state: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

const addressAttributes: ModelAttributes<Address, AddressAttributes> = {
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    number: DataTypes.STRING,
    state: DataTypes.STRING,
    street: DataTypes.STRING,
    userId: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    complement: DataTypes.STRING,
}

export { addressAttributes };