export class CreateEvent {
    name: string
    desc: string
    price: number
    categoryid: number
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
    event: {
        id: number
        name: string
        desc: string
        price: string
    }
}

export class Comment {
    event: number
    comment: string
}
