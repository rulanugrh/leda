import { create, find } from "../service/user"

export const create_user = async(req, res) => {
    try {
        const result = await create(req)

        res.status(200).json({
            'code': 200,
            'msg': 'success create user',
            'data': {
                'name': result.name,
                'email': result.email,
                'role_id': result.roleID
            }
        })

    } catch (error) {
        res.status(500).json({
            'code': 500,
            'msg': 'cant create user'
        })
    }
}

export const find_user_by_id = async(req, res) => {
    try {
        const result = await find(req.params.id)

        res.status(200).json({
            'code': 200,
            'msg': 'user found',
            'data': {
                'name': result.name,
                'email': result.email,
                'role_id': result.roleID
            }
        })

    } catch (error) {
        res.status(404).json({
            'code': 404,
            'msg': 'user not found'
        })
    }
}