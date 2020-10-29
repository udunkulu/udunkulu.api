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
const runTimeEnv = process.env.NODE_ENV;

if (runTimeEnv === 'production') {
  env = {
    SECRET: process.env.APP_SECRET,
    DB: process.env.APP_DB,
    PORT: process.env.APP_PORT,
    NODE_ENV: runTimeEnv
  };
} else if (runTimeEnv === 'development') {
  env = {
    SECRET: process.env.APP_SECRET,
    DB: process.env.APP_DB,
    PORT: process.env.APP_PORT,
    NODE_ENV: runTimeEnv
  };
} else {
  // it is test
  env = {
    SECRET: process.env.APP_SECRET,
    DB: process.env.TEST_DB, // test db
    PORT: process.env.APP_PORT,
    NODE_ENV: runTimeEnv
  };
}

module.exports = {
  ...env
};
