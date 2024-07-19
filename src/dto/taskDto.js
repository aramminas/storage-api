const { difficulties, taskTypes } = require('../assets/constants.js');

const createTaskDto = (task) => {
  const {
    question,
    answer = '',
    code = '',
    answerCode = '',
    answerOptions = '',
    favorite = '',
    type = '',
    complexity,
  } = task;

  return {
    question,
    answer,
    code,
    answerCode,
    answerOptions,
    favorite,
    type,
    complexity,
  };
};

const updateTaskDto = (task) => {
  const { question, answer, code, answerCode, answerOptions, favorite, type, complexity } = task;

  const updatedData = { question };

  if (answer || answer === '') {
    updatedData.answer = answer;
  }

  if (code || code === '') {
    updatedData.code = code;
  }

  if (answerCode || answerCode === '') {
    updatedData.answerCode = answerCode;
  }

  if (answerOptions || answerOptions === '') {
    updatedData.answerOptions = answerOptions;
  }

  if (typeof favorite === 'boolean') {
    updatedData.favorite = favorite;
  }

  if (taskTypes.includes(type)) {
    updatedData.type = type;
  }

  if (difficulties.includes(complexity)) {
    updatedData.complexity = complexity;
  }

  return {
    question,
    answer,
    code,
    answerCode,
    answerOptions,
    favorite,
    type,
    complexity,
  };
};

module.exports = { createTaskDto, updateTaskDto };
