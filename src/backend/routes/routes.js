const express = require('express');
const routes = express.Router();

const usersController = require('../controllers/usersController');

routes.post('/users', usersController.insert);

routes.get('/users', usersController.getAllUsers);

routes.get('/users/:id', usersController.getUser);

routes.put('/users/:id', usersController.updateUser);

routes.delete('/users/:id', usersController.deleteUser);

module.exports = routes;