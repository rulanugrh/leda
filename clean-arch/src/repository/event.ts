import { PrismaClient } from "@prisma/client";
import { Comment, EventCreate, Events } from "../model/entity/dto";

export interface EventRepository {
    Create(req: EventCreate): Promise<EventCreate>
    Find(): Promise<Events[]>
    FindId(id: string): Promise<Events>
}

export class NewEventRepository implements EventRepository {
    prisma: PrismaClient
    constructor(prisma: PrismaClient) {
        this.prisma = prisma
    }
    
    async Create(req: EventCreate): Promise<EventCreate> {
       try {
            const result = await this.prisma.event.create(req)
            return result
       } catch (error) {
            throw new Error(`error from create event: ${error}`)
       }
    }

    async Find(): Promise<Events[]> {
        try {
            const result = await this.prisma.event.findMany({
                include: {
                    comment: true,
                    category: true
                }
            })
            var response: Events[]
            var comm: Comment[]

            for (const r of result) {
                var res: Events

                for (const com of r.comment) {
                    var coms: Comment
                    coms.comment = com.comment
                    coms.eventID = com.eventID

                    comm.push(coms)
                }

                res.id = r.id
                res.name = r.name
                res.price = r.price
                res.desc = r.desc
                res.category.name = r.category.name
                res.category.desc = r.category.desc
                res.comment = comm

                response.push(res)
            }
            return response
        } catch (error) {
            throw new Error(`something error from find all: ${error}`)
        }
    }

    async FindId(id: string): Promise<Events> {
        try {
            const result = await this.prisma.event.findUnique({
                where: {
                    id: Number(id)
                }, include: {
                    comment: true,
                    category: true
                }
            })

            var response: Events
            var comments: Comment[]
            for (const data of result.comment) {
                var comment: Comment
                comment.comment = data.comment
                comment.eventID = data.eventID
                comments.push(comment)
            }

            response.id = result.id
            response.name = result.name
            response.price = result.price
            response.desc = result.desc
            response.category.name = result.category.name
            response.category.desc = result.category.desc
            response.comment = comments

            return response
        } catch (error) {
            throw new Error(`errro from find by id event: ${error}`)
        }
    }
}