import express from "express"
const app = express()

app.get("/", function(req, res) {
    res.status(200).json({
        'msg': 'Hello World',
        'code': 200
    })
})

app.get("/:name", function(req, res) {
    res.status(200).json({
        'msg': `Hello ${req.params.name}`,
        'code': 200
    })
})

app.listen(8080, ()=> {
    console.log("server running at :8080")
})