import Connection from "../config/config";
import { DataTypes } from "sequelize";
import books from "./book";

const category = Connection.define('categories', {
    name: DataTypes.STRING,
    desc: DataTypes.STRING
})

category.belongsToMany(books, {
    through: "rackbooks",
})

export default category