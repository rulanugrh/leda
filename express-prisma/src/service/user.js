import { PrismaClient } from "@prisma/client";
import { createUser, getUser } from "../repository/user";

const prisma = new PrismaClient()

const response = {
    name,
    email,
    roleID
}
export const create = async(req) => {
    const {name, email, roleID, password } = req.body

    const result = await createUser(prisma, name, email, password, roleID)

    response.name = result.name
    response.email = result.email
    response.roleID = result.roleID

    return response
}

export const find = async(id) => {
    const result = await getUser(prisma, id)
    
    response.name = result.name
    response.email = result.email
    response.roleID = result.roleID

    return response
}