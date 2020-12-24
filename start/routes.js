// require your routes here
const users = require('../routes/users');
const { BASE_PATH } = require('../config/env');

/**
 * Routes list
 */
module.exports = (app) => {
// routes goes here
  app.use(`${BASE_PATH}/users`, users);
};
