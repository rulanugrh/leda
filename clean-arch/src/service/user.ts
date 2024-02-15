import { UserLogin, UserReq } from "../model/entity/user";
import { UserResponse } from "../model/web/response";
import { UserRepository } from "../repository/user";
import bcrypt from "bcrypt"

export interface UserService {
    Register(req: UserReq): Promise<UserResponse>
    Login(req: UserLogin): Promise<UserResponse>
}

export class NewUserService implements UserService {
    constructor(private repository: UserRepository) {}

    async Register(req: UserReq): Promise<UserResponse> {
        try {
            const data = await this.repository.Register(req)
            const response: UserResponse = {
                name: data.name,
                id: data.id,
                email: data.email
            }

            return response
        } catch (error) {
            throw new Error(`error from register service :${error}`)
        }
    }

    async Login(req: UserLogin): Promise<UserResponse> {
        try {
            const data = await this.repository.Login(req)
            const response: UserResponse = {
                name: data.name,
                id: data.id,
                email: data.email
            }

            return response
        } catch (error) {
            throw new Error(`error from login service :${error}`)
        }
    }
}