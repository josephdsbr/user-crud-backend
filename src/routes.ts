import { Router, Request, Response } from 'express';
import { authUserController } from './useCases/AuthUser';
import { createUserController } from './useCases/CreateUser';
import { jwtAuthenticationMiddleware } from './middlewares/auth';
const router = Router();

router.post('/sign-in', async (req: Request, res: Response) => {
    return authUserController.handle(req, res);
})

router.use(jwtAuthenticationMiddleware);

router.post('/users', async (req: Request, res: Response) => {
    return createUserController.handle(req, res);
})

export { router };