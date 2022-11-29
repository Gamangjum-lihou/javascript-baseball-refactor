const ValidationError = require('../../Error/ValidationError');
const { ERROR_MESSAGE } = require('../../Constants/Message');

function checkNumber(input) {
  if (/\D/.test(input)) {
    throw new ValidationError(ERROR_MESSAGE.only_number);
  }
}

module.exports = checkNumber;
