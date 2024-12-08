import { Router } from "express";

import UserController from "../controller/user";

const userController = new UserController();

const userRouter = Router();

userRouter.post('/user/login', userController.login);

export default userRouter;