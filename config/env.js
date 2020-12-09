const { logger } = require('./logging');

require('dotenv').config();

// The conditions below may not be necessary
// but may be handy. If not replace everything with:
/**
 module.exports = {
  SECRET: process.env.APP_SECRET,
  DB: process.env.APP_DB,
  PORT: process.env.APP_PORT,
  NODE_ENV: process.env.NODE_ENV,
  NEW_KEY: new_value_FROM_SOME_WHERE
}
 */

let env;

const {
  NODE_ENV, EMAIL, PASSWORD, MAIN_URL, PORT
} = process.env;

if (NODE_ENV === 'production') {
  env = {
    SECRET: process.env.APP_SECRET,
    DB: process.env.APP_DB,
    PORT: PORT || 3000,
    NODE_ENV
  };
} else if (NODE_ENV === 'development') {
  env = {
    SECRET: process.env.APP_SECRET,
    DB: process.env.APP_DB,
    PORT: PORT || 3000,
    NODE_ENV,
    EMAIL,
    PASSWORD,
    MAIN_URL
  };
} else {
  // it is test
  env = {
    SECRET: process.env.APP_SECRET,
    DB: process.env.TEST_DB, // test db
    PORT: process.env.TEST_PORT || 3001,
    NODE_ENV
  };
}

module.exports = {
  ...env
};
