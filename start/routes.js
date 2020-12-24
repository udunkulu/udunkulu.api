// require/import your routes here
const { BASE_PATH } = require('../config/env');

const users = require('../routes/users');

/**
 * Routes list
 */
module.exports = (app) => {
// routes goes here
// example: app.use('api/v1/users', users);
  app.use(`${BASE_PATH}/users`, users);
};
