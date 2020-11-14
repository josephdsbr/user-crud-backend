import { BuildOptions, Model } from "sequelize";
import { AddressAttributes } from "./IAddress";
export interface UserAttributes {
  id?: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  address: AddressAttributes;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface UserModel extends Model<UserAttributes>, UserAttributes {}
export class User extends Model<UserModel, UserAttributes> {}

export type UserStatic = typeof Model & {
   new (values?: object, options?: BuildOptions): UserModel;
};

export interface UserWithTokenModel extends Omit<UserAttributes, 'password'> {
  token: string;
}