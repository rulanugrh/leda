import { EventHandler } from "../handler/event";
import express from "express"

export class EventRouter  {
    handler: EventHandler
    express: express.Application
    
    constructor(handler: EventHandler, express: express.Application) {
        this.handler = handler
        this.express = express
    }

    configRoutes() {
        this.express.route("/api/v1/event/create").post(this.handler.Create)
        this.express.route("/api/v1/event/find").get(this.handler.FindAll)
        this.express.route("/api/v1/event/:id").get(this.handler.FindById)

        return this.express
    }
}