const Movie = require('../models/User');

module.exports = {
    async list(req, res){
        try {
            const users = await User.findAll()
            return res.json(users);
        } catch (err) {
            return console.error("Error listing users: ", err);
        }
    },

    async show(req, res){
        try {
            const user = await User.findAll({where: {id: req.params.id}});
            return res.json(user);
        } catch (err) {
            return console.err("Error to find user: ", err);
        }
    },

    async create(req, res){
        const {name, email, username, passwordHash} = req.body;
        try {
            const user = await User.create({name, email, username, passwordHash});
            return res.json(user);
        } catch (error) {
            return console.error('User creation error', err);
        }
    },

    async update(req, res){
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op
        const { name, email, username, passwordHash } = req.body;
        const id = req.params.id;
        try {
            await Movie.update({title, poster, overview}, {where: {id: {[Op.eq]: id }}});
            return res.json({msg: `User ${title} successfully updated!`});
        } catch (error) {
            return res.json({msg: `User ${title} has not been updated`}, err);            
        }
    },

    async delete(req, res){
        try {
            await Movie.destroy({where: {id: req.params.id }});
            return res.json({msg: `user  ${req.params.id} deletion done successfull!`});
        } catch (err) {
            return console.err("Deletion error: ", err);
        }
    },
}