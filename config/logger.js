const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
});

module.exports = logger;
