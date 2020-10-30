const express = require('express');
require('express-async-errors');

const { PORT } = require('./config/env');
const { logger } = require('./config/logging');

const start = require('./start/kernel');

const app = express();

start(app);

const server = app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});

module.exports = server;
