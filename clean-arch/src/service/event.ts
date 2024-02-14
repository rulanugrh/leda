import { CreateEvent, GetEvent, Comment } from "../model/entity/dao";
import { EventCreate } from "../model/entity/event";
import { EventRepository } from "../repository/event";

export interface EventService {
    Create(req: EventCreate): Promise<CreateEvent>
    Find(): Promise<GetEvent[]>
    FindID(id: string): Promise<GetEvent>
}
class event {
    repo: EventRepository
}

export class NewEventService implements EventService {
    event: event    
    constructor(event: EventRepository) {
        this.event.repo = event
    }

    async Create(req: EventCreate): Promise<CreateEvent> {
        try {
            const data = await this.event.repo.Create(req)
            
            const response: CreateEvent = {
                name: data.name,
                desc: data.desc,
                price: data.price,
                categoryid: data.category_id
            }

            return response
        } catch (error) {
            throw new Error(`Something error from service create event :${error}`)
        }    
    }

    async Find(): Promise<GetEvent[]> {
        try {
            const data = await this.event.repo.Find()
            var response: GetEvent[]
            var comments: Comment[]

            for (const event of data) {
                var res: GetEvent
                for (const comm of event.comment) {
                    var comment: Comment
                    comment.comment = comm.comment
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

        } catch (error) {
            throw new Error(`error from get all event service :${error}`)
        }
    }

    async FindID(id: string): Promise<GetEvent> {
        try {
            const data = await this.event.repo.FindId(id)
            var comments: Comment[]
            for (const d of data.comment) {
                var comment: Comment = {
                    comment: d.comment,
                    event: d.eventID
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
        } catch (error) {
            throw new Error(`Error from find by id event service :${error}`)
        }
    }
}