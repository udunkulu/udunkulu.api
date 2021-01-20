// require your routes here
const users = require('../routes/users');
const docs = require('../routes/docs');
const teams = require('../routes/teams');
const { BASE_PATH } = require('../config/env');
const googleAuth = require('../routes/social-auths');

/**
 * Routes list
 */
module.exports = (app) => {
// routes goes here
  app.use(`${BASE_PATH}/users`, users);
  app.use(`${BASE_PATH}/teams`, teams);
  app.use(`${BASE_PATH}/auth/google`, googleAuth);
 
  app.use(`${BASE_PATH}/docs`, docs);
  app.use('*', docs);
};
