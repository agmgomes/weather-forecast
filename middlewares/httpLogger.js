const morgan = require('morgan');
const logger = require('../utils/logger');

logger.stream = {
  write: message => logger.info(message)
};

module.exports = morgan('short', { stream: logger.stream });
