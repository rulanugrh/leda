import { CommentReq } from "../model/entity/comment"
import { CreateComment, GetComment } from "../model/web/response"
import { CommentRepository } from "../repository/comment"

export interface CommentService {
    Create(req: CommentReq): Promise<CreateComment>
    Find(): Promise<GetComment[]>
    FindId(id: string): Promise<GetComment>
}

class comment {
    repo: CommentRepository
}
export class NewCommentService implements CommentService {
    comm: comment
    constructor(repo: CommentRepository) {
        this.comm.repo = repo
    }

    async Create(req: CommentReq): Promise<CreateComment> {
        try {
            const data = await this.comm.repo.Create(req)
            const response: CreateComment = {
                comment: data.comment,
                event: data.event.name,
            }

            return response
        } catch (error) {
            throw new Error(`error from srvice create comment :${error}`)
        }   
    }

    async Find(): Promise<GetComment[]> {
        try {
            const data = await this.comm.repo.Find()
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
        } catch (error) {
            throw new Error(`error from service find comment :${error}`)
        }
    }

    async FindId(id: string): Promise<GetComment> {
        try {
            const data = await this.comm.repo.FindID(id)
            const response: GetComment = {
                id: data.id,
                event: data.event.name,
                comment: data.comment
            }

            return response
        } catch (error) {
            throw new Error(`error from service find by id comment :${error}`)
        }
    }
}