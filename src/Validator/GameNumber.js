const ValidationError = require('../Error/ValidationError');
const { ERROR_MESSAGE } = require('../Constants/Message');

const GameNumber = {
  checkGameNumbers(input) {
    this.checkNumber(input);
    this.checkLength(input);
    this.checkZero(input);
    this.checkDuplication(input);
  },

  checkNumber(input) {
    if (/\D/.test(input)) {
      throw new ValidationError(ERROR_MESSAGE.only_number);
    }
  },

  checkLength(input) {
    if (input.length !== 3) {
      throw new ValidationError(ERROR_MESSAGE.length_three);
    }
  },

  checkZero(input) {
    if (/0/.test(input)) {
      throw new ValidationError(ERROR_MESSAGE.not_zero);
    }
  },

  checkDuplication(input) {
    if (this.isDuplication(input)) {
      throw new ValidationError(ERROR_MESSAGE.not_duplication);
    }
  },

  isDuplication(input) {
    const check = new Set(input);
    return input.length !== check.size;
  },
};

module.exports = GameNumber;
