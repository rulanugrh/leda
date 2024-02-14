import { PrismaClient } from "@prisma/client";
import { createUser, getEmail, getUser } from "../repository/user";
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

const response = {
    name,
    email,
    roleID
}
export const create = async(req) => {
    const {name, email, roleID, password } = req.body

    const hashPassword = bcrypt.hash(password, 14)
    const result = await createUser(prisma, name, email, hashPassword, roleID)

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


export const findEmail = async(req) => {
    const result = await getEmail(prisma, req.body.email)

    response.email = result.email
    response.name = result.name

    return response
}