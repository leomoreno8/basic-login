const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();
const cors = require('./cors');
routes.use(cors());

routes.get('/users', UserController.list);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.create);
routes.post('/login', UserController.login);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

module.exports = routes;

