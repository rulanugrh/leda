import { PrismaClient } from "@prisma/client";
import { Category, CategoryReq } from "../model/entity/category";

export interface CategoryRepository {
    Create(req: CategoryReq): Promise<Category>
    FindId(id: string): Promise<Category>
}

export class NewCategoryRepository implements CategoryRepository {
    prisma: PrismaClient
    constructor(prisma: PrismaClient) {
        this.prisma = prisma
    }

    async Create(req: CategoryReq): Promise<Category> {
        try {
            const result = await this.prisma.category.create(req)
            return result
        } catch (error) {
            throw new Error(`Something error from create category : ${error}`)
        }    
    }
    async FindId(id: string): Promise<Category> {
        try {
            const result = await this.prisma.category.findUnique({
                where: {
                    id: Number(id)
                }, include: {
                    event: true
                }
            })
            return result
        } catch (error) {
            throw new Error(`Something error from find by id category : ${error}`)
        }
    }
}