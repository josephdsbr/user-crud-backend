export interface ICreateUserRequestDTO {
    name: string;
    email: string;
    password: string;
    phone: string;
    address: IAddressUserRequestDTO
}

interface IAddressUserRequestDTO {
    street: string;
    number: string;
    complement: string;
    district: string;
    zipCode: string;
    city: string;
    state: string;
}