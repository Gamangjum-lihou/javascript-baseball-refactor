const { ERROR_CODE } = require('../utils/constants/error');

class CustomError extends Error {
  constructor(message) {
    super(`${ERROR_CODE} ${message}`);
  }
}

module.exports = CustomError;
