import db from "../config/db.js"
import { DataTypes } from "sequelize"

const Event = db.define('event', {
    nama: DataTypes.STRING,
    price: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    time: DataTypes.TIME,
    kuota: DataTypes.INTEGER
}, {
    freezeTableName: true
})

export default Event