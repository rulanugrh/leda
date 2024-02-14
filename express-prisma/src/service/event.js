import { PrismaClient } from "@prisma/client";
import { createEvent, deleteEvent, getEventAll, getEventByID, updateEvent } from "../repository/event";
const prisma = new PrismaClient();

const response = {
    name,
    desc,
    categoryID,
}

export const create = async (req) => {
    const {name, desc, categoryID }  = req.body
    const result = await createEvent(prisma, name, desc, categoryID)
    
    response.name = result.name
    response.desc = result.desc
    response.categoryID = result.categoryID
    
    return response
}

export const findbyId = async(id) => {
    const result = await getEventByID(prisma, id)

    if (result == null ) {
        return "data not found"
    }

    response.name = result.name
    response.desc = result.desc
    response.categoryID = result.categoryID
    
    return response
}

export const findAll = async () => {
    const result = await getEventAll(prisma)
    
    if (result == null ) {
        return "data not found"
    }
    
    return result
}

export const deleteById = async (id) => {
    const result = await deleteEvent(prisma, id)
    return result
}

export const update = async(id) => {
    const result = await updateEvent(prisma, id)

    response.name = result.name
    response.categoryID = result.categoryID
    response.desc = result.desc

    return response
}
