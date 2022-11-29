const ValidationError = require('../../Error/ValidationError');

function checkNumber(input) {
  if (/\D/.test(input)) {
    throw new ValidationError('숫자이외의 다른 문자가 존재합니다.');
  }
}

module.exports = checkNumber;
