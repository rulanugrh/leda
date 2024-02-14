import { CommentReq } from "../model/entity/comment"
import { CreateComment, GetComment } from "../model/web/response"
import { CommentRepository } from "../repository/comment"

export interface CommentService {
    Create(req: CommentReq): Promise<CreateComment>
    Find(): Promise<GetComment[]>
    FindId(id: string): Promise<GetComment>
}

class comment {
    repo: CommentRepository
}
export class NewCommentService implements CommentRepository {
    comm: comment
    constructor(repo: CommentRepository) {
        this.comm.repo = repo
    }

    async Create(req: CommentReq): Promise<CreateComment> {
        
    }

    async Find(): Promise<GetComment[]> {
        
    }

    async FindID(id: string): Promise<GetComment> {
        
    }
}