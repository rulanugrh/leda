import { where } from "sequelize";
import Event from "../model/event";

export const createEvent = async (req, res) => {
    try {
        const result = await Event.create(req.Body)
        res.statusCode(200)
        res.end(JSON.stringify({
            'msg': 'success create event',
            'code': 200,
            'data': result,
        }))

    } catch (error) {
        res.statusCode(500)
        res.end(JSON.stringify({
            'msg': error.message,
            'code': 500,

        })) 
    }
}

export const getEventByID = async (req, res) => {
    try {
        const result = await Event.findOne({
            where: {
                id: req.params.id
            }
        })

        if(result === null) {
            res.statusCode(404)
            res.end(JSON.stringify({
                'msg': 'event not found',
                'code': 404,

            }))

        } else {
            res.statusCode(200)
            res.end(JSON.stringify({
                'msg': 'event found',
                'code': 200,
                'data': result,
            }))
        }

    } catch (error) {
        res.statusCode(500)
        res.end(JSON.stringify({
            'msg': error.message,
            'code': 500,

        }))   
    }
}

export const getEvents = async (req, res) => {
    try {
        const result = await Event.findAll()

        if(result == []) {
            res.statusCode(404)
            res.end(JSON.stringify({
                'msg': 'not have data about event',
                'code': 404,

            }))
        } else {
            res.statusCode(200)
            res.end(JSON.stringify({
                'msg': 'event found',
                'code': 200,
                'data': result,
            }))
        }
    } catch (error) {
        res.statusCode(500)
        res.end(JSON.stringify({
            'msg': error.message,
            'code': 500,

        }))  
    }
}

export const updateEvent = async (req, res) => {
    try {
        const result = await Event.update(req.Body, {where: {
            id: req.params.id
        }})

        res.statusCode(200)
        res.end(JSON.stringify({
            'msg': 'succes update event',
            'code': 200,
            'data': result,
        }))

    } catch (error) {
        res.statusCode(500)
        res.end(JSON.stringify({
            'msg': error.message,
            'code': 500,

        })) 
    }
}

export const deleteEvent = async (req, res) => {
    try {
        await Event.destroy({
            where: {
                id: req.params.id
            }
        })

        res.statusCode(200)
        res.end(JSON.stringify({
            'msg': 'success delete event',
            'code': 200,
        }))

    } catch (error) {
        res.statusCode(500)
        res.end(JSON.stringify({
            'msg': error.message,
            'code': 500,

        })) 
    }
}