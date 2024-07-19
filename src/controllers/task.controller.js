import { handleError } from '../utils/index.js';
import Task from '../models/task.model.js';
import { Status } from '../assets/constants.js';
import { createTaskDto, updateTaskDto } from '../dto/taskDto.js';

export const getTasks = async (req, res) => {
  try {
    const where = Object.keys(req.query).length ? req.query : {};

    const tasks = await Task.find(where);

    res.status(Status.OK).json(tasks);
  } catch (error) {
    handleError(res, error);
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.status(Status.OK).json(task);
  } catch (error) {
    handleError(res, error);
  }
};

export const createTask = async (req, res) => {
  try {
    const task = await Task.create(createTaskDto(req.body));
    res.status(Status.CREATED).json(task);
  } catch (error) {
    handleError(res, error);
  }
};

export const updateTask = async (req, res) => {
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

export const deleteTask = async (req, res) => {
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
