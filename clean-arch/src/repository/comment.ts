import { PrismaClient } from "../../node_modules/.prisma/client"
import { Comment, CommentReq } from "../model/entity/comment";

export interface CommentRepository {
    Create(req: CommentReq): Promise<Comment>
    Find(): Promise<Comment[]>
    FindID(id: string): Promise<Comment>
}

export class NewCommentRepository implements CommentRepository {
    constructor(private prisma: PrismaClient) {}

    async Create(req: CommentReq): Promise<Comment> {
        try {
            const result = await this.prisma.comment.create(req)
            return result
        } catch (error) {
            throw new Error(`error from create comment :${error}`)
        }
        
    }

    async Find(): Promise<Comment[]> {
        try {
            const result = await this.prisma.comment.findMany({
                include: {
                    event: true,
                }
            })
            return result

        } catch (error) {
            throw new Error(`error from find all comment: ${error}`)
        }
    }

    async FindID(id: string): Promise<Comment> {
        try {
            const result = await this.prisma.comment.findUnique({
                where: {
                    id: Number(id)
                }, include: {
                    event: true,
                }

            })

            return result
        } catch (error) {
            throw new Error(`error from find by id comment :${error}`)
        }
    }
}