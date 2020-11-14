import { BuildOptions, Model } from "sequelize";
export interface AddressAttributes {
    id?: number;
    userId: number;
    street: string;
    number: string;
    complement?: string;
    district: string;
    zipCode: string;
    city: string;
    state: string;
}

export interface AddressModel extends Model<AddressAttributes>, AddressAttributes {}
export class Address extends Model<AddressModel, AddressAttributes> {}

export type AddressStatic = typeof Model & {
   new (values?: object, options?: BuildOptions): AddressModel;
};