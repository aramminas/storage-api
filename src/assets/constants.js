const statusCodes = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

const difficulties = ['easy', 'medium', 'hard', 'extraHard'];
const taskTypes = ['logical', 'common'];

module.exports = { Status: statusCodes, difficulties, taskTypes };
