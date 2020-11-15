import * as yup from 'yup';
import { AddressAttributes } from '../models/IAddress';
import { IUpdateUserDTO } from '../useCases/UpdateUser/UpdateUserDTO';

export const updateUserValidator: yup.ObjectSchema = yup.object().shape<IUpdateUserDTO>({
    id: yup.number().required(),
    email: yup.string().required().email(),
    name: yup.string().required(),
    password: yup.string().min(3).required(),
    phone: yup.string().min(10).required(),
    address: yup.object().shape<AddressAttributes>({
        city: yup.string().required(),
        district: yup.string().required(),
        number: yup.string().required(),
        state: yup.string().required(),
        street: yup.string().required(),
        zipCode: yup.string().required(),
        complement: yup.string(),
        id: yup.string(),
    })
})