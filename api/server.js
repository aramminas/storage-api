const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const { ValidationError } = require('express-validation');
require('dotenv').config();

const routes = require('../routes');
const { Status } = require('../assets/constants.js');
const corsOptions = require('../configs/corsOptions.js');
const welcomeTemplates = require('../assets/welcomeTemplates.js');

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
app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  return res.status(Status.SERVER_ERROR).json(err);
});

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log('Database Connected!');

    app.listen(port, () => {
      console.log('The server is running on the port %s', port);
    });
  })
  .catch(() => console.log('Connection failed!'));
