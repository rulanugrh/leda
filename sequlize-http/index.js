import db from "./config/db";
import http from "http";
import "dotenv/config.js"
import "./controller/event.js";
import { createEvent, deleteEvent, getEventByID, getEvents, updateEvent } from "./controller/event.js";

(async() => {
    await db.sync()
})()

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", `${process.env.APP_ORIGIN}`)
    res.setHeader("Content-Type", "application/json")

    req.on("error", err =>{
        console.error(err)
        res.statusCode(400)
        res.write("400: Bad Request")
    })

    if (req.url === "/" && req.method === "GET") {
        getEvents(req, res) 
    } else if (req.url === "/create" && req.method === "POST") {
        createEvent(req, res)
    } else if (req.url === "/find/:id" && req.method === "GET") {
        getEventByID(req, res)
    } else if (req.url === "/update/:id" && req.method === "PUT") {
        updateEvent(req, res)
    } else if (req.url === "/delete/:id" && req.method === "DELETE") {
        deleteEvent(req, res)
    } else {
        res.statusCode(400)
        res.write("400: Bad request")
    }
})

server.listen(process.env.APP_PORT, `${process.env.APP_HOST}`, () =>{
    console.log(`Server running at ${process.env.APP_HOST}:${process.env.APP_PORT}`)
})