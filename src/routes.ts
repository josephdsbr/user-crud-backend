import { Router, Request, Response } from 'express';
import User from './entities/User';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
    const user = await User.create({
        email: 'josephdsbr@gmail.com',
        name: 'José Vinícius Santos de Melo',
        phone: '81997667754'
    })
    return res.json(user);
})

export { router };