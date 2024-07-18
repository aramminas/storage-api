const { Status } = require('../assets/constants.js');

const handleError = (res, err, code = Status.SERVER_ERROR) =>
  res.status(code).send({ error: true, message: err.message });

module.exports = { handleError };
