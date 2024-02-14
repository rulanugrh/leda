import { PrismaClient } from "@prisma/client";
import { Event, EventReq } from "../model/entity/event";

export interface EventRepository {
    Create(req: EventReq): Promise<Event>
    Find(): Promise<Event[]>
    FindId(id: string): Promise<Event>
}

export class NewEventRepository implements EventRepository {
    prisma: PrismaClient
    constructor(prisma: PrismaClient) {
        this.prisma = prisma
    }
    
    async Create(req: EventReq): Promise<Event> {
       try {
            const result = await this.prisma.event.create(req)
            return result
       } catch (error) {
            throw new Error(`error from create event: ${error}`)
       }
    }

    async Find(): Promise<Event[]> {
        try {
            const result = await this.prisma.event.findMany({
                include: {
                    comment: true,
                    category: true
                }
            })
            
            return result
        } catch (error) {
            throw new Error(`something error from find all: ${error}`)
        }
    }

    async FindId(id: string): Promise<Event> {
        try {
            const result = await this.prisma.event.findUnique({
                where: {
                    id: Number(id)
                }, include: {
                    comment: true,
                    category: true
                }
            })

            return result
        } catch (error) {
            throw new Error(`errro from find by id event: ${error}`)
        }
    }
}