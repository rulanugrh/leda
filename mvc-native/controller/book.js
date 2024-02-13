import books from '../model/book'
import category from '../model/category'

export const createBook = async(req, res) => {
    try {
        const book = await books.create(req.body)

        res.statusCode(200)
        res.end(JSON.stringify({
            'code': 200,
            'msg': 'success crete book',
            'data': book
        }))

    } catch (error) {
        res.statusCode(500)
        res.end(JSON.stringify({
            'code': 500,
            'msg': 'something error for request',
            'error': error.message,
        }))
    }
}

export const getBook = async(req, res) => {
    try {
        const book = await books.findAll({
            where: {
                model: category,
                as: 'category'
            }
        })

        res.statusCode(200)
        res.end(JSON.stringify({
            'code': 200,
            'msg': 'success find all',
            'data': book
        }))

    } catch (error) {
        res.statusCode(404)
        res.end(JSON.stringify({
            'code': 404,
            'msg': 'data not found',
            'error': error.message
        }))
    }
}

export const getBookById = async(req, res) => {
    try {
        const book = await books.findOne({
            where: {
                mode: category,
                as: 'category',
                id: req.params.id
            }
        })

        res.statusCode(200)
        res.end(JSON.stringify({
            'code': 200,
            'msg': 'success find event by this id',
            'data': book
        }))

    } catch (error) {
        res.statusCode(404)
        res.end(JSON.stringify({
            'code': 404,
            'msg': 'data not found',
            'error': error.message
        }))
    }
}

export const deleteBook = async(req, res) => {
    try {
        await books.destroy({
            where: {
                id: req.params.id
            }
        })

        res.statusCode(200)
        res.end(JSON.stringify({
            'code': 200,
            'msg': 'success delete book by this id',
        }))

    } catch (error) {
        res.statusCode(500)
        res.end(JSON.stringify({
            'code': 500,
            'msg': 'cant delete book by this id',
            'error': error.message
        }))
    }
}

export const updateBook = async(req, res) => {
    try {
        const book = await books.update(req.body, {
            where: {
                model: category,
                as: 'category',
                id: req.params.id
            }
        })

        res.statusCode(200)
        res.end(JSON.stringify({
            'code': 200,
            'msg': 'success update book',
            'data': book
        }))

    } catch (error) {
        res.statusCode(500)
        res.end(JSON.stringify({
            'code': 500,
            'msg': 'cant update book by this id',
            'error': error.message
        }))
    }
}