import express from "express"
import { create_category, get_all_category, get_category_by_id } from "../handler/category"

module.exports = express.Router()
    .post('/create', create_category)
    .get('/find/:id', get_category_by_id)
    .get('/find', get_all_category)