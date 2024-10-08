import express from "express"
import { create_user, find_user_by_id, login } from "../handler/user"

module.exports = express.Router()
    .post('/create', create_user)
    .get('/find/:id', find_user_by_id)
    .post('/login', login)