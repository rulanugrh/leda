import books from "../model/book"
import category from "../model/category"

export const createCategory = async(req, res) => {
    try {
        const result = await category.create(req.body)
        
        res.statusCode(200)
        res.end(JSON.stringify({
            'code': 200,
            'msg': 'success create category',
            'data': result
        }))

    } catch (error) {
        res.statusCode(500)
        res.end(JSON.stringify({
            'code': 500,
            'msg': 'cant create category',
            'error': error.message
        }))
    }
}

export const getCategory = async(req, res) => {
    try {
        const result = await category.findAll({
            include: books
        })
    
        res.statusCode(200)
        res.end(JSON.stringify({
            'code': 200,
            'msg': 'success find category',
            'data': result
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

export const getCategoryByID = async(req, res) => {
    try {
        const result = await category.findOne({
            where: {
                id: req.params.id
            },
            include: books
        })

        res.statusCode(200)
        res.end(JSON.stringify({
            'code': 200,
            'msg': 'success find category',
            'data': result
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