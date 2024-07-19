import { ValidationError } from 'express-validation';
import { Status } from '../assets/constants.js';

const nodeMode = process.env.NODE_ENV || '';

function notFound(req, res, next) {
  res.status(Status.NOT_FOUND);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

function errorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  const statusCode = res.statusCode !== Status.OK ? res.statusCode : Status.SERVER_ERROR;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: nodeMode !== 'production' ? '🔙' : err.stack,
  });
}

export default {
  notFound,
  errorHandler,
};
