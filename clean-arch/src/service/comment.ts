import { Span, Tracer, trace } from "@opentelemetry/api"
import { CommentReq } from "../model/entity/comment"
import { CreateComment, GetComment } from "../model/web/response"
import { CommentRepository } from "../repository/comment"

export interface CommentService {
    Create(req: CommentReq): Promise<CreateComment>
    Find(): Promise<GetComment[]>
    FindId(id: string): Promise<GetComment>
}

export class NewCommentService implements CommentService {
    private comm: CommentRepository
    private tracer: Tracer = trace.getTracer("comment-service")

    constructor(repo: CommentRepository, tracer: Tracer) {
        this.comm = repo
        this.tracer = tracer
    }

    async Create(req: CommentReq): Promise<CreateComment> {
        try {
            return this.tracer.startActiveSpan("create-comment", async (span: Span) => {

                const data = await this.comm.Create(req)
                const response: CreateComment = {
                    comment: data.comment,
                    event: data.event.name,
                }
    
                return response
            })
        } catch (error) {
            throw new Error(`error from srvice create comment :${error}`)
        }   
    }

    async Find(): Promise<GetComment[]> {
        try {
            return this.tracer.startActiveSpan("findAll-comment", async (span: Span) => {

                const data = await this.comm.Find()
                var response: GetComment[]
                for (const d of data) {
                    var res: GetComment = {
                        comment: d.comment,
                        event: d.event.name,
                        id: d.id,
                    }
    
                    response.push(res)
                }
    
                return response
            })
        } catch (error) {
            throw new Error(`error from service find comment :${error}`)
        }
    }

    async FindId(id: string): Promise<GetComment> {
        try {
            return this.tracer.startActiveSpan("findID-comment", async (span: Span) => {

                const data = await this.comm.FindID(id)
                const response: GetComment = {
                    id: data.id,
                    event: data.event.name,
                    comment: data.comment
                }
    
                return response
            })
        } catch (error) {
            throw new Error(`error from service find by id comment :${error}`)
        }
    }
}