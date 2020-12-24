const { logger } = require('./logging');

require('dotenv').config();

let env;

const {
  NODE_ENV, EMAIL, PASSWORD, APP_URL, PORT, APP_SECRET, APP_DB
} = process.env;

const BASE_PATH = '/api/v1';

// we want to use the same env configuration for both
// production and development env to avoid bugs when we moved our code to production
// so in essence, if it is working in development, it should work in production
// to perform some env specific operation we can check the env at that point in time, then perform
// the required operation under the check block.
const inProductionOrDevelopment = NODE_ENV === 'production' || NODE_ENV === 'development';

if (inProductionOrDevelopment) {
  // In the future this might be separated into two or moved into file:
  // (production and development)
  env = {
    SECRET: APP_SECRET,
    DB: APP_DB,
    PORT: PORT || 3000,
    NODE_ENV,
    EMAIL,
    PASSWORD,
    APP_URL,
    BASE_PATH
  };
} else {
  // else it is in test env
  env = {
    SECRET: APP_SECRET,
    DB: process.env.TEST_DB, // test db
    PORT: process.env.TEST_PORT || 3001,
    NODE_ENV,
    APP_URL,
    BASE_PATH
  };
}

module.exports = {
  ...env
};
