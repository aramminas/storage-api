const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const routes = require('./src/routes');
const corsOptions = require('./src/configs/corsOptions.js');
const welcomeTemplates = require('./src/assets/welcomeTemplates.js');
const middlewares = require('./src/middlewares');

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
  .catch(() => console.log('Connection failed!'));
