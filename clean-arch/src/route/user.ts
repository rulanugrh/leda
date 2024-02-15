import { UserHandler } from "../handler/user";
import express from "express"

export class UserRouter {
    constructor(private handler: UserHandler, private app: express.Application) {}

    configRoutes() {
        this.app.route("/api/v1/user/register").post(this.handler.Register)
        this.app.route("/api/v1/user/login").post(this.handler.Login)

        return this.app
    }
}