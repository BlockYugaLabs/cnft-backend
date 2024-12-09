
import { Request, Response } from "express";

import UserService from "../service/user";

const userService = new UserService();


class UserController {

    async login(req: Request, res: Response) {

        try {

            const { publicKey, signature, message } = req.body;
            const isVerified = await userService.signatureVerification(publicKey, signature, message);

            if (!isVerified)
                res.send({
                    "msg": "not signed successfully"
                });

            res.send({
                "msg": "signed successfully"
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