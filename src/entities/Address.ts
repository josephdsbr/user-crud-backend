import { DataTypes, ModelAttributes, Sequelize } from 'sequelize';
import { AddressAttributes, AddressStatic } from '../models/IAddress';

export function AddressFactory (sequelize: Sequelize): AddressStatic {
    return<AddressStatic> sequelize.define('addresses', attributes , options);
}

const attributes: ModelAttributes = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    district: {
        type: DataTypes.STRING,
        allowNull: false
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    zipCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    complement: {
        type: DataTypes.STRING
    }
};

const options = {};