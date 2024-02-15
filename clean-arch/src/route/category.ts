import { CategoryHandler } from "../handler/category";
import express from "express"

export class CategoryRoute {
    constructor(private handler: CategoryHandler, private express: express.Application) {}

    configRoute() {
        this.express.route("/api/v1/category/create").post(this.handler.Create)
        this.express.route("/api/v1/category/find/:id").get(this.handler.FindID)

        return this.express
    }
}