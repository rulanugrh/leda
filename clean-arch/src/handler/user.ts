import { Request, Response } from "express";
import { UserService } from "../service/user";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import bcrypt from "bcrypt"
import { Failure, Success } from "../model/web/response";

export interface UserHandler {
    Register(req: Request, res: Response): Promise<Response>
    Login(req: Request, res: Response): Promise<Response>
}

export class NewUserHandler implements UserHandler {
    constructor(private service: UserService) {}

    async Register(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
        try {
            req.body.password = bcrypt.hash(req.body.password, 14)
            const data = await this.service.Register(req.body)

            const response: Success = {
                code: 200,
                msg: "success register",
                data: data
            }

            return res.status(200).json(response)
        } catch (error) {
            const response: Failure = {
                code: '500',
                msg: "cannot register",
                error: error
            }

            return res.status(500).json(response)
    
        }
    }

    async Login(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
        try {
            const data = await this.service.Login(req.body.email)
            const response: Success = {
                code: 200,
                msg: "success register",
                data: data
            }

            return res.status(200).json(response)
        } catch (error) {
            const response: Failure = {
                code: '500',
                msg: "cannot login",
                error: error
            }

            return res.status(500).json(response)
    
        }
    }
}