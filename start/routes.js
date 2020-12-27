// require your routes here
const users = require('../routes/users');
const docs = require('../routes/docs');
const { BASE_PATH } = require('../config/env');

/**
 * Routes list
 */
module.exports = (app) => {
// routes goes here
  app.use(`${BASE_PATH}/users`, users);
  app.use(`${BASE_PATH}/docs`, docs);
};
