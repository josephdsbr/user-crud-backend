import { Router, Request, Response } from 'express';
import { authUserController } from './useCases/AuthUser';
import { createUserController } from './useCases/CreateUser';
import { jwtAuthenticationMiddleware } from './middlewares/AuthMiddleware';
import { createUserValidator } from './validators/CreateUserValidator'
import { validateSchema } from './middlewares/ValidateDTOMiddleware';
import { userDetailsController } from './useCases/UserDetails';

const router = Router();

router.post('/sign-in', async (req: Request, res: Response) => {
    return authUserController.handle(req, res);
})

router.use(jwtAuthenticationMiddleware);

router.post('/users', validateSchema(createUserValidator),  async (req: Request, res: Response) => {
    return createUserController.handle(req, res);
})

router.get('/users/:id', async (req: Request, res: Response) => {
    return userDetailsController.handle(req, res);
})

export { router };