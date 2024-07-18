const { handleError } = require('../utils');
const Task = require('../models/task.model.js');
const { Status } = require('../assets/constants.js');
const { createTaskDto, updateTaskDto } = require('../dto/taskDto');

const getTasks = async (req, res) => {
  try {
    const where = Object.keys(req.query).length ? req.query : {};

    const tasks = await Task.find(where);

    res.status(Status.OK).json(tasks);
  } catch (error) {
    handleError(res, error);
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.status(Status.OK).json(task);
  } catch (error) {
    handleError(res, error);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(createTaskDto(req.body));
    res.status(Status.CREATED).json(task);
  } catch (error) {
    handleError(res, error);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndUpdate(id, updateTaskDto(req.body));

    if (!task) {
      return handleError(res, { message: '⛔ Task not found' }, Status.NOT_FOUND);
    }

    const updatedTask = await Task.findById(id);
    res.status(Status.OK).json(updatedTask);
  } catch (error) {
    handleError(res, error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return handleError(res, { message: '⛔ Task not found' }, Status.NOT_FOUND);
    }

    res.status(Status.OK).json({ message: '✅ Task deleted successfully' });
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
