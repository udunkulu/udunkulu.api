const express = require('express');
require('express-async-errors');

const start = require('./start/kernel');
const { PORT } = require('./config/env');
const { logger } = require('./config/logging');

const app = express();

start(app);

const port = PORT || 3000;

const server = app.listen(port, () => {
  logger.info(`Listening on port ${port}`);
});

module.exports = server;
