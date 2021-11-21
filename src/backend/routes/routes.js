const express = require('express');

const authMiddleware = require('../middlewares/auth')
const routes = express.Router();

const usersController = require('../controllers/usersController');
const projectController = require('../controllers/projectController')

//user Controller

routes.post('/users', usersController.register);

routes.post('/authenticate', usersController.authenticate)

routes.get('/users', usersController.getAllUsers);

routes.get('/users/:id', usersController.getUser);

routes.put('/users/:id', usersController.updateUser);

routes.delete('/users/:id', usersController.deleteUser);


// projectController

routes.use(authMiddleware);

routes.get('/', projectController.test);


module.exports = routes;