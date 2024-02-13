import { Sequelize } from "sequelize";
import "dotenv/config";

const Connection = new Sequelize(`${process.env.DB_USER}`, `${process.env.DB_PASS}`, `${process.env.DB_NAME}`, {
    host: `${process.env.DB_HOST}`,
    port: `${process.env.DB_PORT}`,
    dialect: 'postgres'
})

export default Connection