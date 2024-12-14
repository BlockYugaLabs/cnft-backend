import config from "./../config/index"
const { JWT_SECRET } = config;

import { Request, Response } from "express";

import * as jwt from "jsonwebtoken";

import userModel from "../model/user";

import UserService from "../service/user";

const userService = new UserService();


class UserController {

    async login(req: Request, res: Response) {

        try {

            const { publicKey, signature, message } = req.body;
            //const isVerified = //await userService.signatureVerification(publicKey, signature, message);

            // if (!isVerified)
            //     res.sendStatus(403);

            const user = await userModel.findOne({
                publicKey
            });

            if (!user) {
                await new userModel({
                    publicKey
                }).save();
            }

            const token = jwt.sign({
                publicKey
            }, JWT_SECRET as jwt.Secret, {
                expiresIn: '1hr'
            })

            res.send({
                token
            });

        } catch (err) {
            console.log("Err", err)
            res.status(500).send({
                "msg": "internal server error."
            })
        }


    }

}

export default UserController;