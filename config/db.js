const mongoose = require('mongoose');

const { DB } = require('./env');
const { logger } = require('./logging');

module.exports = (function database() {
  const startdb = () => {
    mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
      .then(() => {
        logger.info('Connected to database...');
      }).catch((error) => {
        logger.error('Error connecting to database...', error.message);
        logger.info('Reconnecting to database...')
        startdb();
      });
  };

  startdb();
});
