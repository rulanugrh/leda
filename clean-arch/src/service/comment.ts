import { CreateComment, GetComment } from "../model/entity/dao";
import { Comment, Comments } from "../model/entity/event";
import { CommentRepository } from "../repository/comment";

export interface CommentService {
    Create(req: Comment): Promise<CreateComment>
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

    async Create(req: Comment): Promise<Comment> {
        
    }

    async Find(): Promise<Comments[]> {
        
    }

    async FindID(id: string): Promise<Comments> {
        
    }
}