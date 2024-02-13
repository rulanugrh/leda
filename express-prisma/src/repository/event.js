
export const createEvent = async (prisma, name, desc, categoryID) =>{
    const result = await prisma.event.create({
        data: {
            name,
            desc,
            categoryID
        }
    })

    return result
}

export const getEventByID = async(prisma, idEvent) => {
    const result = await prisma.event.findUnique({
        where: {
            id: Number(idEvent)
        }
    })

    return result
}

export const getEventAll = async (prisma) => {
    const result = await prisma.event.findMany()
    return result
}

export const updateEvent = async(prisma, eventID) => {
    const result = await prisma.event.update({
        where: {
            id: Number(eventID)
        }
    })

    return result
}

export const deleteEvent = async(prisma, eventID) => {
    const result = await prisma.event.delete({
        where: {
            id: Number(eventID)
        }
    })

    return result
}