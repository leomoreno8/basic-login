const Sequelize = require('sequelize');
const sequelize = new Sequelize('basic-login', 'postgres', 'postgres', {
    host: 'localhost', // Change to docker 
    dialect: 'postgres'
});

module.exports = sequelize;