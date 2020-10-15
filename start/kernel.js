const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const asyncError = require('../middlewares/async-error');
const { exceptRejectionLogger } = require('../config/logging');
const routes = require('./routes');

exceptRejectionLogger();
require('../config/db')();

module.exports = (app) => {
  app.use(morgan('dev'));
  app.use(cors());
  app.use(express.json());
  routes(app);

  app.use(asyncError);
};
