import Connection from "../config/config";
import { DataTypes } from "sequelize";
import category from "./category";

const books = Connection.define('books', {
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    desc: DataTypes.STRING,
    banner: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
}, {
    freezeTableName: true,  
})

books.belongsTo(category, {
    foreignKey: 'category_id',
    targetKey: 'id'
})

export default books
