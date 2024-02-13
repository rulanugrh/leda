import express from "express"
import cors from "cors"

var event = require("./src/route/event")
var category = require("./src/route/category")

var corsOptions = {
    origin: `${process.env.APP_ORIGIN}`,
    optionSuccessStatus: 200
}

const app = express()
app.use(cors(corsOptions))
app.use(express.json())
app.use('/api/v1/event', event)
app.use('/api/v1/category', category)

app.listen(process.env.APP_PORT, () => {
    console.log(`Server running at :${process.env.APP_PORT}`)
})

