const Sequelize = require('sequelize');
const sequelize = require('../db.js');

const schema = 'public';

class User extends Sequelize.Model {}

User.init({
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    passwordHash: Sequelize.STRING
}, {sequelize, modelName: 'user', schema});

sequelize.sync();

module.exports = User;