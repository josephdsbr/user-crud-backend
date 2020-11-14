import { AddressAttributes } from "../../models/IAddress";

export interface ICreateUserRequestDTO {
    name: string;
    email: string;
    password: string;
    phone: string;
    address: AddressAttributes
}