import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';

config();

import routes from './src/routes/index.js';
import corsOptions from './src/configs/corsOptions.js';
import welcomeTemplates from './src/assets/welcomeTemplates.js';
import middlewares from './src/middlewares/index.js';

const app = express();
const port = process.env.PORT || 3000;
const mongoDbUrl = process.env.MONGO_DB_URL || '';

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send(Buffer.from(welcomeTemplates));
});

app.use(cors(corsOptions));
app.use('/api', routes);

// validation error handling
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log('Database Connected!');

    app.listen(port, () => {
      console.log('The server is running on the port %s', port);
    });
  })
  .catch((error) => console.log('Connection failed!', error));
