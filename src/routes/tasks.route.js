import express from 'express';
import { validate } from 'express-validation';

import {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/task.controller.js';
import { taskValidation } from '../validations/tasks.validation.js';

const router = express.Router();

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

export default router;
