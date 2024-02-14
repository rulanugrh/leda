import { Request, Response } from "express";
import { EventService } from "../service/event";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { EventReq } from "../model/entity/event";
import { Failure, Success } from "../model/web/response";

export interface EventHandler {
    Create(req: Request, res: Response): Promise<Response>
    FindAll(req: Request, res: Response): Promise<Response>
    FindById(req: Request, res: Response): Promise<Response>
}

export class NewEventHandler implements EventHandler {
    service: EventService
    constructor (service: EventService) {
        this.service = service
    }

    async Create(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
        try {
            var request: EventReq
            request.category_id, request.desc, request.name, request.price = req.body

            const data = await this.service.Create(req.body)
            const response: Success = {
                code: 200,
                msg: "Success create event",
                data: data
            }

            return res.status(200).json(response)
        } catch (error) {
            const response: Failure = {
                code: '500',
                msg: "cannot create event",
                error: error
            }

            return res.status(500).json(response)
        }
        
    }
    async FindAll(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
        try {
            const data = await this.service.Find()
            const response: Success = {
                code: 200,
                msg: "event found",
                data: data
            }

            return res.status(200).json(response)
        } catch (error) {
            const response: Failure = {
                code: '404',
                msg: "event not found",
                error: error
            }

            return res.status(404).json(response)   
        }
    }

    async FindById(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
        try {
            const data = await this.service.FindID(req.params.id)
            const response: Success = {
                code: 200,
                msg: "event found",
                data: data
            }

            return res.status(200).json(response)
        } catch (error) {
            const response: Failure = {
                code: '404',
                msg: "event not found",
                error: error
            }

            return res.status(404).json(response)
        }
    }
}