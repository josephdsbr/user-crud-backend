import * as sequelize from 'sequelize';
import { UserFactory } from './User';
import options from '../config/DatabaseConfig';
import { AddressFactory } from './Address';

export const dbConfig = new sequelize.Sequelize(options as sequelize.Options);

export const User = UserFactory(dbConfig);
export const Address = AddressFactory(dbConfig);

User.belongsTo(Address, { onUpdate: 'CASCADE', onDelete: 'CASCADE', foreignKey: 'address_id' });