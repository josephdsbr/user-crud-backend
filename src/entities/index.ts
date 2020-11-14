import * as sequelize from 'sequelize';
import { UserFactory } from './User';
import options from '../config/database';

export const dbConfig = new sequelize.Sequelize(options as sequelize.Options);

export const User = UserFactory(dbConfig);