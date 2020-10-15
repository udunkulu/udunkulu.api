// require your routes here
// example: const users = require('../routes/users')

const users = require('../routes/users');

const basePath = '/api/v1';

/**
 * Routes list
 */
module.exports = (app) => {
// routes goes here
// example: app.use('api/v1/users', users);
  app.use(`${basePath}/users`, users);
};
