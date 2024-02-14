import { IsString } from "class-validator"
import { Event } from "./event"

export class CommentReq {
    @IsString()
    name: string

    @IsString()
    desc: string
}

export class Comment {
    id: number
    comment: string
    event_id: number
    event: Event
}