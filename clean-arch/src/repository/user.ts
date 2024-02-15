import { PrismaClient } from "../../node_modules/.prisma/client";
import { User, UserLogin, UserReq } from "../model/entity/user";

export interface UserRepository {
    Register(req: UserReq): Promise<User>
    Login(req: UserLogin): Promise<User>
}

export class NewUserRepository implements UserRepository {
    private prisma: PrismaClient
    constructor(prisma: PrismaClient) {
        this.prisma = prisma
    }

    async Register(req: UserReq): Promise<User> {
        try {
            const result = await this.prisma.create({
                data: req
            })

            return result
        } catch (error) {
            throw new Error(`error from register repository :${error}`)
        }
    }

    async Login(req: UserLogin): Promise<User> {
        try {
            const result = await this.prisma.findUnique({
                where: {
                    email: req.email
                }
            })
            return result
        } catch (error) {
            throw new Error(`error from login repository :${error}`)
        }
    }
}