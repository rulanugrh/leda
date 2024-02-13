import { create, findAll, findById } from "../service/category"

export const create_category = async(req, res) => {
    try {
        const result = await create(req)
        res.status(200).json({
            'code': 200,
            'msg': 'success create category',
            'data': {
                'name': result.name,
                'desc': result.desc
            }
        })

    } catch (error) {
        res.status(500).json({
            'code': 500,
            'msg': 'cant create category'
        })
    }
}

export const get_all_category = async(req, res) => {
    try {
        const result = await findAll()

        res.status(200).json({
            'code': 200,
            'msg': 'category found',
            'data': result
        })

    } catch (error) {
        res.status(404).json({
            'code': 404,
            'msg': 'category not found'
        })
    }
}

export const get_category_by_id = async(req, res) => {
    try {
        const result = await findById(req.params.id)

        res.status(200).json({
            'code': 200,
            'msg': 'category found',
            'data': result
        })

    } catch (error) {
        res.status(404).json({
            'code': 404,
            'msg': 'category not found'
        })
    }
}