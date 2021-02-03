const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const asyncError = require('../middlewares/async-error');
const { exceptRejectionLogger } = require('../config/logging');
const routes = require('./routes');

exceptRejectionLogger();
require('../config/database')();

module.exports = (app) => {
  app.use(morgan('dev'));
  app.use(cors({
    credentials: true,
    origin: [
      'http://localhost:3000',
      'https://udunkulu-stream.netlify.com'
    ]
  }));
  app.use(express.json());
  routes(app);

  app.use(asyncError);
};
