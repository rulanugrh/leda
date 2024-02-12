import http from "http"
import Connection from "./config/config"
import { BookRouter } from "./routes/book"
import { CategoryRouter } from "./routes/category"
import "dotenv/config"

(async() => {
    await Connection.sync()
})()

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "applicaation/json")
    res.setHeader("Access-Control-Allow-Origin", process.env.APP_ORIGIN)

    res.on('error', err => {
        console.error(err.message)
        res.statusCode(400)
        res.end(JSON.stringify({
            'code': 400,
            'msg': 'bad request',
            'error': err.message
        }))
    })

    BookRouter(req, res)
    CategoryRouter(req, res)
})

server.listen(process.env.APP_PORT, `${process.env.APP_HOST}`, () => {
    console.log(`Server running at :${process.env.APP_PORT}`)
})