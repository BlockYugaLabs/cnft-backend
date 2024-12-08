import express, { Express, Request, Response } from "express";

import userRouter from "./route/user";

const app: Express = express();

app.use(userRouter);

export default app;