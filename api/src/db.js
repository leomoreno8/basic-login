const Sequelize = require("sequelize");
const sequelize = new Sequelize("postgres://postgres:postgres@postgres:5432/postgres");

module.exports = sequelize;