const express = require('express');

const authMiddleware = require('../middlewares/auth')
const routes = express.Router();

const usersController = require('../controllers/usersController');
const projectController = require('../controllers/projectController')

//user Controller

routes.post('/users', usersController.register);

routes.post('/authenticate', usersController.authenticate)

routes.get('/users', usersController.getAllUsers);

routes.get('/user/:id', usersController.getUser);

routes.put('/users/:id', usersController.updateUser);

routes.delete('/users/:id', usersController.deleteUser);

routes.put('/addProfile', usersController.addProfile);

routes.delete('/removeProfile', usersController.removeProfile);

routes.delete('/removeAllProfiles', usersController.removeAllProfiles);


// projectController

// routes.use(authMiddleware);

routes.get('/', projectController.test);


module.exports = routes;