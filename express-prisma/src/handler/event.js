import { create, deleteById, findAll, findbyId, update } from "../service/event"

export const create_evet = async (req, res) => {
    try {
        const result = await create(req)
        
        res.status(200).json({
            'code': 200,
            'msg': 'success create event',
            'data': {
                'name': result.name,
                'category_id': result.categoryID,
                'description': result.desc
            }
        })

    } catch (error) {
        res.status(500).json({
            'code': 500,
            'msg': 'cannot create event'
        })
    }
}

export const get_event_by_id = async(req, res) => {
    try {
        const result = await findbyId(req.params.id)

        res.status(200).json({
            'code': 200,
            'msg': 'success create event',
            'data': {
                'name': result.name,
                'category_id': result.categoryID,
                'description': result.desc
            }
        })

    } catch (error) {
        res.status(404).json({
            'code': 404,
            'msg': 'data not found'
        })
    }
}

export const get_event = async(req, res) => {
    try {
        const result = await findAll()

        res.status(200).json({
            'code': 200,
            'msg': 'success create event',
            'data': result
        })

    } catch (error) {
        res.status(404).json({
            'code': 404,
            'msg': 'data not found'
        })
    }
}

export const update_event = async(req, res) => {
    try {
        const result = await update(req.params.id)

        res.status(200).json({
            'code': 200,
            'msg': 'success create event',
            'data': {
                'name': result.name,
                'category_id': result.categoryID,
                'description': result.desc
            }
        })

    } catch (error) {
        res.status(500).json({
            'code': 500,
            'msg': 'cant update data'
        })
    }
}

export const delete_event = async(req, res) => {
    try {
        const result = await deleteById(req.params.id)

        res.status(200).json({
            'code': 200,
            'msg': 'success delete event',
        })

    } catch (error) {
        res.status(500).json({
            'code': 500,
            'msg': 'cant delete event by this id'
        })
    }
}