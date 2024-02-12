import { createCategory,  getCategory, getCategoryByID } from "../controller/category";

export const CategoryRouter = async(req, res) => {
    if (req.url === "/api/v1/category" && req.method === "GET") {
        getCategory(req, res)
    } else if (req.url === "/api/v1/category/create" && req.method === "POST") {
        createCategory(req, res)
    } else if (req.url === "/api/v1/category/find/:id" && req.method === "GET") {
        getCategoryByID(req, res)
    } else {
        res.statusCode(404)
        res.end(JSON.stringify({
            'code': 404,
            'msg': "path not found"
        }))
    }
}