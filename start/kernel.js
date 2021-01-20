const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');

const asyncError = require('../middlewares/async-error');
const { exceptRejectionLogger } = require('../config/logging');
const routes = require('./routes');

exceptRejectionLogger();
require('../config/database')();

module.exports = (app) => {
  app.use(morgan('dev'));
  app.use(cors());
  app.use(express.json());
  app.use(cookieSession({
    name: 'udunkulu-session',
    keys: ['key1', 'key2']
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  routes(app);

  app.use(asyncError);
};
