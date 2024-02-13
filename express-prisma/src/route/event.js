import express from "express"
import { create_evet, delete_event, get_event, get_event_by_id, update_event } from "../handler/event"

module.exports = express.Router()
    .post('/create', create_evet)
    .get('/find/:id', get_event_by_id)
    .get('/find', get_event)
    .put('/update/:id', update_event)
    .delete('/delete/:id', delete_event)