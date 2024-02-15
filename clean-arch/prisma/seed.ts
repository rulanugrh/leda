import { PrismaClient } from "../node_modules/.prisma/client";

const prisma = PrismaClient()

const roles = [
    {
        name: "administrator",
        desc: "ini adalah role administrator"
    }, {
        name: "user",
        desc: "ini adalah role user"
    }
]

async function seeder() {
    console.log("Start seed to db")
    for (const r of roles) {
        const role = await prisma.role.create({
            data: r
        })

        console.log(`Create role by id :${role.id}`)
    }

    console.log("Seed finished...")
}

seeder()
    .then(async () => {
        await prisma.$disconnect
    })
    .catch(async(e) => {
        console.error(e)
        await prisma.$disconnect
        process.exit(1)
    })