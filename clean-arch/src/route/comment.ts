import { CommentHandler } from "../handler/comment";
import express from "express"

export class CommentRouter {
    handler: CommentHandler
    express: express.Application

    constructor(handler: CommentHandler, app: express.Application) {
        this.handler = handler
        this.express = app
    }

    configRoutes() {
        this.express.route("/api/v1/comment/create").post(this.handler.Create)
        this.express.route("/api/v1/comment/find").get(this.handler.FindAll)
        this.express.route("/api/v1/comment/find/:id").get(this.handler.FindById)
        return this.express
    }
}