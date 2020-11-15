import { AddressAttributes } from "../../models/IAddress";

export interface IUpdateUserDTO {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: string;
    address: AddressAttributes
}