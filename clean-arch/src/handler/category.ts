import { Request, Response } from "express";
import { CategoryService } from "../service/category";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { Failure, Success } from "../model/web/response";

export interface CategoryHandler {
    Create(req: Request, res: Response): Promise<Response>
    FindID(req: Request, res: Response): Promise<Response>
}

export class NewCategoryHandler implements CategoryHandler {
    constructor(private service: CategoryService) {}

    async Create(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
        try {
            const data = await this.service.Create(req.body)
            const response: Success = {
                code: 200,
                msg: "Success create category",
                data: data
            }

            return res.status(200).json(response) 
        } catch (error) {
            const response: Failure = {
                code: '500',
                msg: "cannot create category",
                error: error
            }

            return res.status(500).json(response)
        }
    }

    async FindID(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
        try {
            const data = await this.service.FindId(req.params.id)
            const response: Success = {
                code: 200,
                msg: "category found",
                data: data
            }

            return res.status(200).json(response)
        } catch (error) {
            const response: Failure = {
                code: '404',
                msg: "category not found",
                error: error
            }

            return res.status(404).json(response) 
        }
    }
}