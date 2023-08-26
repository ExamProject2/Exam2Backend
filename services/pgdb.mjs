import {Sequelize} from "sequelize";

const sequelize = new Sequelize("event_logs", "postgres", "password", {
    dialect: "postgres"
});
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default sequelize;
