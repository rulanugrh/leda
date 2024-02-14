import { IsString } from "class-validator"
import { Event } from "./event"

export class CategoryReq {
    @IsString()
    name: string
    
    @IsString()
    desc: string
}

export class Category {
    id: number
    name: string
    desc: string
    event: Event[]
}