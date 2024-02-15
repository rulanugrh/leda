import { Request, Response } from "express"
import { CommentService } from "../service/comment"
import { ParamsDictionary } from "express-serve-static-core"
import { ParsedQs } from "qs"
import { Failure, Success } from "../model/web/response"

export interface CommentHandler {
    Create(req: Request, res: Response): Promise<Response>
    FindAll(req: Request, res: Response): Promise<Response>
    FindById(req: Request, res: Response): Promise<Response>
}

export class NewCommentHandler implements CommentHandler {
    constructor(private serv: CommentService) {}

    async Create(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
        try {
            const data = await this.serv.Create(req.body)
            const response: Success = {
                code: 200,
                msg: "Success create comment",
                data: data
            }

            return res.status(200).json(response)
        } catch (error) {
            const response: Failure = {
                code: '500',
                msg: "cannot create comment",
                error: error
            }

            return res.status(500).json(response)
        }
    }

    async FindAll(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
        try {
            const data = await this.serv.Find()
            const response: Success = {
                code: 200,
                msg: "comment found",
                data: data
            }

            return res.status(200).json(response)
        } catch (error) {
            const response: Failure = {
                code: '404',
                msg: "comment not found",
                error: error
            }

            return res.status(404).json(response)   
        }
    }

    async FindById(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
        try {
            const data = await this.serv.FindId(req.params.id)
            const response: Success = {
                code: 200,
                msg: "comment found",
                data: data
            }

            return res.status(200).json(response)
        } catch (error) {
            const response: Failure = {
                code: '404',
                msg: "comment not found",
                error: error
            }

            return res.status(404).json(response)
        }
    }
}