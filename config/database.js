const mongoose = require('mongoose');

const { DB, NODE_ENV } = require('./env');
const { logger } = require('./logging');

module.exports = (function database() {
  const startdb = () => {
    mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
      .then(() => {
        if (NODE_ENV !== 'test') logger.info('Connected to database...');
      }).catch((error) => {
        logger.error('Error connecting to database...', error.message);
        logger.info('Reconnecting to database...');
        startdb();
      });
  };

  startdb();
});
