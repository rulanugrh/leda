import jswonwebtoken from "jsonwebtoken"
import "dotenv/config"

export const generatToken = (email) => {
    return jswonwebtoken.sign(email, process.env.APP_SECRET, {
        expiresIn: '3600s',
        algorithm: 'HS256',
    })
}