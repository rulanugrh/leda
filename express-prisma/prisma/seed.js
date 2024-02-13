import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const categoryData = [
    {
        name: "Information Technology",
        desc: "Ini adalah event category Information Technology ( IT )"
    }, 
    {
        name: "Job Fair",
        desc: "Ini adalah event category Job Fair"
    }
]

async function main() {
    console.log("Start seeder to db")
    for (const cate of categoryData) {
        const category = await prisma.category.create({
            data: cate,
        })
        console.log(`Create category by id: ${category.id}`)
    }

    console.log("Seeding finished...")
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async(e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })