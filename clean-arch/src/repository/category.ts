import { PrismaClient } from "@prisma/client";
import { Category, CategoryReq } from "../model/entity/category";

export interface CategoryRepository {
    Create(req: CategoryReq): Promise<Category>
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
}