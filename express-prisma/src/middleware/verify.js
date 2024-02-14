import jwt from "jsonwebtoken"

export const verify = (req, res, next) => {
    const header = req.headers["authorization"]
    const token = header && header.split(' ')[1]

    if (token === null) {
        return res.status(401).json({
            'code': 401,
            'msg': 'you must login first'
        })
    }

    jwt.verify(token, process.env.APP_SECRET, (err, user) => {
        console.log(err)
        if (err) {
            return res.status(403).json({
                'code': 403,
                'msg': 'forbidden, your token invalid'
            })
        }

        req.user = user

        next()
    })
}