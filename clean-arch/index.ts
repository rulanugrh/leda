import express from "express"
import { NewEventRepository } from "./src/repository/event"
import { PrismaClient } from "./node_modules/.prisma/client"
import { NewEventService } from "./src/service/event"
import { NewEventHandler } from "./src/handler/event"
import { EventRouter } from "./src/route/event"
import { NewCommentRepository } from "./src/repository/comment"
import { NewCommentService } from "./src/service/comment"
import { NewCommentHandler } from "./src/handler/comment"
import { CommentRouter } from "./src/route/comment"
import "dotenv/config"
import { NewCategoryRepository } from "./src/repository/category"
import { NewCategoryService } from "./src/service/category"
import { NewCategoryHandler } from "./src/handler/category"
import { CategoryRoute } from "./src/route/category"
import { NewUserRepository } from "./src/repository/user"
import { NewUserService } from "./src/service/user"
import { NewUserHandler } from "./src/handler/user"
import { UserRouter } from "./src/route/user"
import { CORSMiddleware } from "./src/middleware/cors"
import { Tracer, trace } from "@opentelemetry/api"

const app: express.Application = express()
const prisma = PrismaClient()
const CorsMiddlewae = new CORSMiddleware()
const tracer: Tracer = trace.getTracer("clean-arch-monitoring", "1.0.0")

const eventRepository = new NewEventRepository(prisma)
const eventService = new NewEventService(eventRepository, tracer)
const eventHandler = new NewEventHandler(eventService)
const eventRoute = new EventRouter(eventHandler, app)

const commentRepository = new NewCommentRepository(prisma)
const commentService = new NewCommentService(commentRepository, tracer)
const commentHandler = new NewCommentHandler(commentService)
const commentRoute = new CommentRouter(commentHandler, app)

const categoryRepository = new NewCategoryRepository(prisma)
const categoryService = new NewCategoryService(categoryRepository, tracer)
const categoryHandler = new NewCategoryHandler(categoryService)
const categoryRoute = new CategoryRoute(categoryHandler, app)

const userRepository = new NewUserRepository(prisma)
const userService = new NewUserService(userRepository)
const userHandler = new NewUserHandler(userService)
const userRouter = new UserRouter(userHandler, app)

app.use(CorsMiddlewae.cors)
app.use(eventRoute.configRoutes(), commentRoute.configRoutes(), categoryRoute.configRoute(), userRouter.configRoutes())

app.listen(process.env.APP_PORT, () => {
    console.log(`Server running at port :${process.env.APP_PORT}`)
})