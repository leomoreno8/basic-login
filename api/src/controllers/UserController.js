const Hashing = require("../helpers/security/hashing.security");
const { findOne } = require("../models/User");
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {

    // I left the entire CRUD for in case it's needed in the future.
    // I will pass on the business rules for services shortly. I'm out of time :(

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
        const {name, email, password} = req.body;
        try {
            const exists = await User.count({ where: { email: email } });
            if(exists == 0) {
                const passwordHash = await Hashing.hash(password)
                const user = await User.create({name, email, passwordHash});
                return res.json(user);
            } else {
                return res.json("User already exists");
            }
        } catch (error) {
            return console.error('User creation error', error);
        }
    },

    async login(req, res){
        const {email, password} = req.body;
        try {
            const user = await User.findOne({ where: { email: email } });
            if(user) {
                const passwordValid = await Hashing.compare(password, user.passwordHash);
                if(passwordValid) {
                    let token = jwt.sign({ "id" : user.id,"email" : user.email,"name":user.name }, process.env.JWT_SECRET);
                    res.status(200).json({ token : token });
                } else {
                    res.json({ error : "User or Password Incorrect" });
                }
            
            } else {
                res.json({ error : "User or Password Incorrect" });
            }
        } catch (error) {
            return console.error('Failed to login', error);
        }
    },

    async update(req, res){
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op
        const { name, email, password } = req.body;
        const id = req.params.id;
        try {
            await User.update({name, email, password}, {where: {id: {[Op.eq]: id }}});
            return res.json({msg: `User ${name} successfully updated!`});
        } catch (error) {
            return res.json({msg: `User ${name} has not been updated`}, err);            
        }
    },

    async delete(req, res){
        try {
            await User.destroy({where: {id: req.params.id }});
            return res.json({msg: `user  ${req.params.id} deletion done successfull!`});
        } catch (err) {
            return console.err("Deletion error: ", err);
        }
    },
}