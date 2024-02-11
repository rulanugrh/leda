const express = require('express');
const app = express()

var listData = []

time = new Date()
app.use(express.json())

app.post('/create', (req, res) => {
    try {
        if (!req.body){
            res.status(500).json({
                'msg': 'cant post data',
                'code': 500
            })

            console.log(`Time ${time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()} - /create - 404`)

        } else {
            listData.push(req.body)
            
            res.status(200).json({
                'msg': 'success post data',
                'code': 200,
            })

            console.log(`Time ${time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()} - /create - 200`)

        }

    } catch (error) {
        console.log(error.messsage)
    }
})

app.get('/', async (req, res) => {
    try {
        if (listData.length == 0) {
            res.status(404).json({
                'msg': 'data not found',
                'code': 404
            })

            console.log(`Time ${time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()} - / - 404`)

        } else {
            res.status(200).send({
                'msg': 'sucess get data',
                'code': 200,
                'data': listData,
            })

            console.log(`Time ${time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()} - / - 200`)
            
        }
        
    } catch (error) {
        console.log(error.messsage)
    }
    
})

app.get('/find/:id', (req, res) => {
    try {
        ids = req.params.id
        ids -= 1

        if(listData.at(ids) === null) {
            res.status(404).json({
                'msg': 'data not found',
                'code': 404
            })            

            console.log(`Time ${time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()} - /find/${req.params.id} - 404`)

        } else {
            res.status(200).json({
                'msg': 'data found',
                'code': 200,
                'data': listData.at(ids)
            })
            console.log(`Time ${time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()} - /find/${req.params.id} - 200`)
        }

    } catch (error) {

        console.log(error.messsage)
    }
})

app.delete('/delete/:id', (req, res) => {
    try {
        ids = req.params.id
        ids -= 1

        if(listData.at(ids) === null) {
            res.status(404).json({
                'msg': 'data not found',
                'code': 404
            })    
            
            console.log(`Time ${time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()} - /delete/${req.params.id} - 404`)

        } else {
            listData.splice(ids, 1)
            res.status(200).json({
                'msg': 'data sucess remove',
                'code': 200,
            })

            console.log(`Time ${time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()} - /delete/${req.params.id} - 200`)
        }

    } catch (error) {

        console.log(error.messsage)
    }
})


app.put('/update/:id', (req, res) => {
    try {
        ids = req.params.id
        ids -= 1

        if(listData.at(ids) === null) {
            res.status(404).json({
                'msg': 'data not found',
                'code': 404
            })            
        } else {
            findIndex = listData.findIndex((obj => obj.id == req.params.id))
            listData[findIndex].name = req.body.name
            listData[findIndex].price = req.body.price

            res.status(200).json({
                'msg': 'data sucess update',
                'code': 200,
            })            
        }

    } catch (error) {

        console.log(error.messsage)
    }
})

app.listen(3000, () => {
    console.log("Server running at :3000\n")
})