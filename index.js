const express = require('express');
require('express-async-errors');
const path = require('path');

const { PORT } = require('./config/env');
const { logger } = require('./config/logging');

const start = require('./start/kernel');

const app = express();

// set up view engine to use EJS as its template
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

start(app);

const server = app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});

module.exports = server;
