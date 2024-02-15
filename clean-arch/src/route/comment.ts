import { CommentHandler } from "../handler/comment";
import express from "express"

export class CommentRouter {

    constructor(private handler: CommentHandler, private app: express.Application) {}

    configRoutes() {
        this.app.route("/api/v1/comment/create").post(this.handler.Create)
        this.app.route("/api/v1/comment/find").get(this.handler.FindAll)
        this.app.route("/api/v1/comment/find/:id").get(this.handler.FindById)
        return this.app
    }
}