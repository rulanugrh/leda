import { PrismaClient } from "@prisma/client";
import { Category } from "../model/entity/dto";

export interface CategoryRepository {
    Create(req: Category): Promise<Category>
}

export class NewCategoryRepository implements CategoryRepository {
    prisma: PrismaClient
    constructor(prisma: PrismaClient) {
        this.prisma = prisma
    }

    async Create(req: Category): Promise<Category> {
        try {
            const result = await this.prisma.category.create(req)
            return result
        } catch (error) {
            throw new Error(`Something error from create category : ${error}`)
        }    
    }
}