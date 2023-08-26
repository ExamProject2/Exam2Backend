import {DataTypes, Model} from "sequelize";
import sequelize from '../services/pgdb.mjs';
import User from "./User.mjs";

class Order extends Model{}

Order.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    orders: {
        type: DataTypes.STRING(755),
    },
    create_time: {
        type: DataTypes.INTEGER,
    },
    create_at: {
        type: DataTypes.DATE, // Используйте DataTypes.DATE для типа "timestamp without time zone"
        allowNull: false,
        defaultValue: DataTypes.NOW, // Установите значение по умолчанию (если нужно)
        timezone: false,
    }
},
{
    // Other model options go here
    sequelize,
    modelName: 'Order', // We need to choose the model name
    tableName: 'orders',
    timestamps: false
});


Order.belongsTo(User, {
    foreignKey: 'user_id',
    sourceKey: 'id',
});

export default Order;
