import { Span, Tracer, trace } from "@opentelemetry/api"
import { EventReq } from "../model/entity/event"
import { Comment, CreateEvent, GetEvent } from "../model/web/response"
import { EventRepository } from "../repository/event"

export interface EventService {
    Create(req: EventReq): Promise<CreateEvent>
    Find(): Promise<GetEvent[]>
    FindID(id: string): Promise<GetEvent>
}

export class NewEventService implements EventService {
    private event: EventRepository
    private tracer: Tracer = trace.getTracer("event-services")

    constructor(event: EventRepository, tracer: Tracer) {
        this.event = event
        this.tracer = tracer
    }

    async Create(req: EventReq): Promise<CreateEvent> {
        try {
            return this.tracer.startActiveSpan("create-event", async (span: Span) => {

                const data = await this.event.Create(req)
    
                const response: CreateEvent = {
                    name: data.name,
                    desc: data.desc,
                    price: data.price,
                    category: data.category.name
                }
    
                return response
            })
        } catch (error) {
            throw new Error(`Something error from service create event :${error}`)
        }    
    }

    async Find(): Promise<GetEvent[]> {
        try {
            return this.tracer.startActiveSpan("findAll-event", async (span: Span) => {

                const data = await this.event.Find()
                var response: GetEvent[]
                var comments: Comment[]
    
                for (const event of data) {
                    var res: GetEvent
                    for (const comm of event.comment) {
                        var comment: Comment = {
                            comment: comm.comment,
                            event: comm.event.name
                        }
                        comments.push(comment)
                    }
    
                    res.id = event.id
                    res.name = event.name
                    res.price = event.price
                    res.category.desc = event.category.desc
                    res.category.name = event.category.name
                    res.comment = comments
    
                    response.push(res)
                }
    
                return response
            })

        } catch (error) {
            throw new Error(`error from get all event service :${error}`)
        }
    }

    async FindID(id: string): Promise<GetEvent> {
        try {
            return this.tracer.startActiveSpan("findByID-event", async (span: Span) => {
                
                const data = await this.event.FindId(id)
                var comments: Comment[]
                for (const d of data.comment) {
                    var comment: Comment = {
                        comment: d.comment,
                        event: d.event.name
                    }
    
                    comments.push(comment)
                }
    
                const response: GetEvent = {
                    name: data.name,
                    id: data.id,
                    desc: data.desc,
                    price: data.price,
                    category : {
                        name: data.category.name,
                        desc: data.category.desc
                    },
                    comment: comments
                }
    
                return response
            })
        } catch (error) {
            throw new Error(`Error from find by id event service :${error}`)
        }
    }
}