import { PrismaClient } from "@prisma/client";
import { createCategory, getCategory, getCategoryById } from "../repository/category";

const prisma = PrismaClient()

const response = {
    name,
    desc,
}

export const create = async(req) => {
    const {name, desc} = req.body
    const result = await createCategory(prisma, name, desc)

    response.desc = result.desc
    response.name = result.name

    return response
}

export const findAll = async() => {
    const result = await getCategory(prisma)
    return result
}

export const findById = async(id) => {
    const result = await getCategoryById(prisma, id)
    return result
}