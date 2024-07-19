const express = require('express');
const { validate } = require('express-validation');

const router = express.Router();
const {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/task.controller.js');
const { taskValidation } = require('../validations/tasks.validation.js');

// GET
// get all tasks
router.get('/', getTasks);

// get task
router.get('/:id', getTask);

// POST
// create task createTask
router.post('/', validate(taskValidation, {}, {}), createTask);

// PUT
// update a task
router.put('/:id', validate(taskValidation, {}, {}), updateTask);

// DELETE
// delete a task
router.delete('/:id', deleteTask);

module.exports = router;
