const winston = require('winston');
require('winston-mongodb');
// const { NODE_ENV } = require('./env');

// Handle uncaught Exception and promise rejection
const exceptRejectionLogger = () => {
  // uncaught exception
  winston.exceptions.handle(
    // new winston.transports.Console(),
    new winston.transports.File({
      filename: 'logs/uncaughtExceptions.log'
    })
  );

  //   promise rejection that was not handled
  process.on('unhandledRejection', (ex) => {
    throw ex;
  });
  // write promise rejection to file
  winston.add(new winston.transports.File({ filename: 'logs/unhandledRejections.log' }));
  // add log to database
  // winston.add(new winston.transports.MongoDB({ db: DB }));
};

// create logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    // - Write all logs error (and below) to `error.log`.
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    // - Write to all logs with level `info` and below to `combined.log`
    new winston.transports.File({ filename: 'logs/combined.log' })

  ]
});

// Enable console logging
logger.add(new winston.transports.Console({
  format: winston.format.simple()
}));

exports.logger = logger;
exports.exceptRejectionLogger = exceptRejectionLogger;
