import express from "express"
import { NewEventRepository } from "./src/repository/event"
import { PrismaClient } from "@prisma/client"
import { NewEventService } from "./src/service/event"
import { NewEventHandler } from "./src/handler/event"
import { EventRouter } from "./src/route/event"

const app: express.Application = express()
const prisma = PrismaClient()
const eventRepository = new NewEventRepository(prisma)
const eventService = new NewEventService(eventRepository)
const eventHandler = new NewEventHandler(eventService)

const eventRoute = new EventRouter(eventHandler, app)
app.use(eventRoute.configRoutes)