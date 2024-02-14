import { PrismaClient } from "@prisma/client";
import { Comment, Comments } from "../model/entity/dto";

export interface CommentRepository {
    Create(req: Comment): Promise<Comment>
    Find(): Promise<Comments[]>
    FindID(id: string): Promise<Comments>
}

export class NewCommentRepository implements CommentRepository {
    prisma: PrismaClient
    constructor(prisma: PrismaClient) {
        this.prisma = prisma
    }

    async Create(req: Comment): Promise<Comment> {
        try {
            const result = await this.prisma.comment.create(req)
            return result
        } catch (error) {
            throw new Error(`error from create comment :${error}`)
        }
        
    }

    async Find(): Promise<Comments[]> {
        try {
            const result = await this.prisma.comment.findMany({
                include: {
                    event: true,
                }
            })

            var response: Comments[]
            for (const data of result) {
                var res: Comments
                res.comment = data.comment
                res.eventName = data.event.name
                res.id = data.id

                response.push(res)
            }

            return response
        } catch (error) {
            throw new Error(`error from find all comment: ${error}`)
        }
    }

    async FindID(id: string): Promise<Comments> {
        try {
            const result = await this.prisma.comment.findUnique({
                where: {
                    id: Number(id)
                }, include: {
                    event: true,
                }

            })

            var response: Comments = {
                comment: result.comment,
                id: result.id,
                eventName: result.event.name
            }
            
            return response
        } catch (error) {
            throw new Error(`error from find by id comment :${error}`)
        }
    }
}