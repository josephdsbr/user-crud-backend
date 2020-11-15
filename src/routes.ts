import { Router, Request, Response } from 'express';
import { authUserController } from './useCases/AuthUser';
import { createUserController } from './useCases/CreateUser';
import { jwtAuthenticationMiddleware } from './middlewares/AuthMiddleware';
import { createUserValidator } from './validators/CreateUserValidator'
import { validateSchema } from './middlewares/ValidateDTOMiddleware';
import { userDetailsController } from './useCases/UserDetails';
import { updateUserController } from './useCases/UpdateUser';
import { updateUserValidator } from './validators/UpdateUserValidator';

const router = Router();

router.post('/sign-in', async (req: Request, res: Response) => {
    return authUserController.handle(req, res);
})

router.post('/users', validateSchema(createUserValidator),  async (req: Request, res: Response) => {
    return createUserController.handle(req, res);
})

router.use(jwtAuthenticationMiddleware);

router.get('/users/:id', async (req: Request, res: Response) => {
    return userDetailsController.handle(req, res);
})

router.put("/users", validateSchema(updateUserValidator) ,async (req: Request, res: Response) => {
    return updateUserController.handle(req, res);
})

export { router };