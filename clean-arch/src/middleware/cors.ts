import { NextFunction, Request, Response } from "express";
import "dotenv/config"

export class CORSMiddleware {
    cors(req: Request, res: Response, next: NextFunction) {
        res.setHeader("Access-Control-Allow-Origin", process.env.APP_ORIGIN)
        res.setHeader("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS, PUT")
        res.setHeader("Access-Control-Allow-Headers", "Connection, Content-Type, Origin, Authentication")

        if (req.method == "OPTIONS") {
            return res.sendStatus(200)
        }

        next()
    }
}