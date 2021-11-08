const express = require('express');
const routes = express.Router();

const usersController = require('../controllers/usersController');

routes.post('/users', usersController.insert);

routes.get('/users', usersController.getAllUsers);

routes.get('/users/:id', usersController.getUser);

module.exports = routes;