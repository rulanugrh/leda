export const createUser = async(prisma, name, email, password, roleID) => {
    const result = await prisma.user.create({
        name,
        email,
        password,
        roleID
    })

    return result
}

export const getUser = async(prisma, ids) => {
    const result = await prisma.user.findUnique({
        where: {
            id: ids
        }
    })

    return result
}