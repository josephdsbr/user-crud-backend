import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'yup';

const validateSchema = (schema: ObjectSchema) => {
    return async (request: Request, response: Response, next: NextFunction) => {
        try {
            const validatedBody = await schema.validate(request.body);
            request.body = validatedBody;
            next();
        } catch(error) {
            response.status(400).json(error)
        }
    }
}

export { validateSchema };