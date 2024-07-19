const routes = require('express').Router();

// api routes
const tasks = require('./tasks.route.js');

routes.use('/tasks', tasks);

module.exports = routes;
