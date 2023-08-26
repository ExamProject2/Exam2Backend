import {DataTypes, Model} from "sequelize";
import sequelize from '../services/pgdb.mjs';
import Order from "./Order.mjs";

class User extends Model {}

User.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(255),
    },
    email: {
        type: DataTypes.STRING(255),
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
    tableName: 'Users',
    timestamps: false
});

User.hasMany(Order, {  foreignKey: 'user_id'});

export default User;
