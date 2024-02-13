export const createCategory = async(prisma, name, desc) => {
    const result = await prisma.category.create({
        data: {
            name,
            desc
        }
    })

    return result
}

export const getCategory = async(prisma) => {
    const result = await prisma.category.findMany()
    return result
}

export const getCategoryById = async(prisma, ids) => {
    const result = await prisma.category.findUnique({
        where: {
            id: ids
        }
    })

    return result
}