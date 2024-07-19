import { Status } from '../assets/constants.js';

export const handleError = (res, err, code = Status.SERVER_ERROR) =>
  res.status(code).send({ error: true, message: err.message });
