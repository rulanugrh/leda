import { IsString, IsNumber, IsInt, IsIn } from "class-validator"
import { Category } from "./category"
import { Comment } from "./comment"

export class EventReq {
    @IsString()
    name: string

    @IsString()
    desc: string

    @IsInt()
    price: number

    @IsInt()
    category_id: number
}

export class Event {
    id: number
    name: string
    desc: string
    price: number
    category_id: number
    category: Category
    comment: Comment[]
}
