import express from "express"
import { NewEventRepository } from "./src/repository/event"
import { PrismaClient } from "@prisma/client"
import { NewEventService } from "./src/service/event"
import { NewEventHandler } from "./src/handler/event"
import { EventRouter } from "./src/route/event"
import { NewCommentRepository } from "./src/repository/comment"
import { NewCommentService } from "./src/service/comment"
import { NewCommentHandler } from "./src/handler/comment"
import { CommentRouter } from "./src/route/comment"
import "dotenv/config"

const app: express.Application = express()
const prisma = PrismaClient()

const eventRepository = new NewEventRepository(prisma)
const eventService = new NewEventService(eventRepository)
const eventHandler = new NewEventHandler(eventService)
const eventRoute = new EventRouter(eventHandler, app)

const commentRepository = new NewCommentRepository(prisma)
const commentService = new NewCommentService(commentRepository)
const commentHandler = new NewCommentHandler(commentService)
const commentRoute = new CommentRouter(commentHandler, app)

app.use(eventRoute.configRoutes, commentRoute.configRoutes)

app.listen(process.env.APP_PORT, () => {
    console.log(`Server running at port :${process.env.APP_PORT}`)
})