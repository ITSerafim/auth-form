import { Router } from "express";

const authRouter = Router();


authRouter.post('/login');
authRouter.post('/registration');

export default authRouter;