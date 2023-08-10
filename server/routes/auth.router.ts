import { Router } from 'express';
import { authController } from '../src/auth-module';

const authRouter = Router();

authRouter.post('/registration', authController.signOn);
authRouter.post('/login', authController.signIn);

export default authRouter;
