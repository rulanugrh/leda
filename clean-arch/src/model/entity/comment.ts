import { IsInt, IsString } from "class-validator"
import { Event } from "./event"

export class CommentReq {
    @IsString()
    comment: string

    @IsInt()
    event_id: number
}

export class Comment {
    id: number
    comment: string
    event_id: number
    event: Event
}