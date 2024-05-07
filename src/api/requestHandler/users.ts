import { RequestHandler } from "express";
import * as userController from "../../core/controller/users";

export const registerUser: RequestHandler = async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const user = userController.registerUser(Number(req.params.id), { email, username, password });
        res.json({ message: 'User registration successful', user }); 
    } catch (error) {
        next(error);
    }   
}
