export class Response {
    msg: string
    code: number
    data: any
}

export class Failure {
    msg: string
    code: string
    error: string
}

export class CreateEvent {
    name: string
    desc: string
    price: number
    category: string
}

export class GetEvent {
    id: number
    name: string
    desc: string
    price: number
    category: {
        name: string
        desc: string
    }
    comment: Comment[]
}

export class CreateCategory {
    name: string
    desc: string
}

export class GetCategory {
    id: number
    name: string
    desc: string
    event: GetEvent[]
}

export class Comment {
    event: string
    comment: string
}

export class CreateComment {
    event: string
    comment: string
}

export class GetComment {
    id: number
    event: string
    comment: string
}