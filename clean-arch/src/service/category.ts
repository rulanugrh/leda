import { CategoryReq } from "../model/entity/category";
import { CreateCategory, GetCategory, GetComment, GetEvent } from "../model/web/response";
import { CategoryRepository } from "../repository/category";

export interface CategoryService {
    Create(req: CategoryReq): Promise<CreateCategory>
    FindId(id: string): Promise<GetCategory>
}

export class NewCategoryService implements CategoryService {
    private cate: CategoryRepository
    constructor(repo: CategoryRepository) {
        this.cate = repo
    }

    async Create(req: CategoryReq): Promise<CreateCategory> {
        try {
            const data = await this.cate.Create(req)
            const response: CreateCategory = {
                name: data.name,
                desc: data.desc
            }

            return response
        } catch (error) {
            throw new Error(`error from service create :${error}`)
        }
    }

    async FindId(id: string): Promise<GetCategory> {
        try {
            const data = await this.cate.FindId(id)
            var events: GetEvent[]
            var comments: GetComment[]
            for (const d of data.event) {
                for (const c of d.comment) {
                    var comment: GetComment = {
                        comment: c.comment,
                        event: c.event.name,
                        id: c.id
                    }
                    comments.push(comment)
                }

                var event: GetEvent = {
                    id: d.id,
                    name: d.name,
                    desc: d.desc,
                    category:{
                        name: d.category.name,
                        desc: d.category.desc,
                    },
                    comment: comments,
                    price: d.price
                }

                events.push(event)
            }
            const response: GetCategory = {
                id: data.id,
                desc: data.desc,
                name: data.name,
                event: events
            }

            return response
        } catch (error) {
            throw new Error(`error from find by id category :${error}`)
        }
    }
}