import { Joi } from 'express-validation';
import { difficulties, taskTypes } from '../assets/constants.js';

export const taskValidation = {
  body: Joi.object({
    question: Joi.string().min(10).required(),
    answer: Joi.string().optional().empty(''),
    code: Joi.string().optional().empty(''),
    answerCode: Joi.string().optional().empty(''),
    answerOptions: Joi.string().optional().empty(''),
    favorite: Joi.boolean().optional(),
    type: Joi.string().valid(...taskTypes),
    complexity: Joi.string().valid(...difficulties),
  }),
};
