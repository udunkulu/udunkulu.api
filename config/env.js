require('dotenv').config();

module.exports = {
  SECRET: process.env.APP_SECRET,
  DB: process.env.APP_DB,
  PORT: process.env.APP_PORT,
  NODE_ENV: process.env.NODE_ENV
};
