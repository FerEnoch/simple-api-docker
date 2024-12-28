import { UserData } from "../db/schemas/types";
import { servicesTypes } from "../types";
import { Request, Response } from 'express';
import { IUserController } from "./types";

export class UserController implements IUserController {
    private service: servicesTypes;

    constructor(service: servicesTypes) {
        this.service = service;
    }

    async getAll(_req: Request, res: Response) {
        const users = await this.service.getAll();
        return res.status(200).json(users)
    }

    async register(req: Request, res: Response) {
        const { email, password } = req.body as UserData;

        const user = await this.service.register({ email, password });
        return res.status(201).json(user);
    }

    async deleteAll(_req: Request, res: Response) {
        await this.service.deleteAll();
        return res.status(204).send('Cleaned all users');
    }
}