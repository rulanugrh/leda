import { IsString, IsNumber, IsInt, IsIn } from "class-validator"

export class EventCreate {
    @IsString()
    name: string

    @IsString()
    desc: string

    @IsInt()
    price: number

    @IsInt()
    category_id: number
}

export class Comment {
    @IsInt()
    eventID: number
    
    @IsString()
    comment: string
}

export class Category {
    @IsString()
    name: string
    
    @IsString()
    desc: string
}

export class Events {
    id: number
    name: string
    desc: string
    price: number
    category: Category
    comment: Comment[]
}

export class Comments {
    id: number
    eventName: string
    comment: string
}