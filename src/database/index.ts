import { Options, Sequelize } from 'sequelize';
import options from '../config/database';
import { Address, addressAttributes } from '../entities/Address';
import User, { userAttributes } from '../entities/User';

const connection = new Sequelize(options as Options);

User.init(userAttributes, { tableName: 'users', sequelize: connection });
Address.init(addressAttributes, { tableName: 'addresses', sequelize: connection });

export default connection;