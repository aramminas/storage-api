import { Router } from 'express';
// api routes
import tasks from './tasks.route.js';

const routes = Router();

routes.use('/tasks', tasks);

export default routes;
