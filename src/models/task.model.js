const mongoose = require('mongoose');

const { difficulties, taskTypes } = require('../assets/constants.js');

const TaskSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, 'Question field is required ❗'],
    },
    answer: {
      type: String,
      default: '',
    },
    code: {
      type: String,
      default: '',
    },
    answerCode: {
      type: String,
      default: '',
    },
    answerOptions: {
      type: String,
      default: '',
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      enum: taskTypes,
    },
    complexity: {
      type: String,
      enum: difficulties,
    },
  },
  {
    timestamps: true,
  },
);

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
