import { getBook, getBookById, createBook, updateBook, deleteBook } from "../controller/book";

export const BookRouter = async(req, res ) => {
    if (req.url === "/api/v1/book" && req.method === "GET") {
        getBook(req, res)
    } else if (req.url === "/api/v1/book/create" && req.method === "POST") {
        createBook(req, res)
    } else if (req.url === "/api/v1/book/find/:id" && req.method === "GET") {
        getBookById(req, res)
    } else if (req.url === "/api/v1/book/update/:id" && req.method === "PUT") {
        updateBook(req, res)
    } else if (req.url === "/api/v1/book/delete/:id" && req.method === "DELETE") {
        deleteBook(req, res)
    } else {
        res.statusCode(404)
        res.end(JSON.stringify({
            'code': 404,
            'msg': "path not found"
        }))
    }
}