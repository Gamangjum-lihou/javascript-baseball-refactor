const { ERROR_MESSAGE } = require('../Constants/Message');

class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause.message;
    this.name = `${ERROR_MESSAGE.error}`;
  }
}

module.exports = ReadError;
