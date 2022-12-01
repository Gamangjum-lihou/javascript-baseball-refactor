const ValidationError = require('../Error/ValidationError');
const { ERROR_MESSAGE } = require('../Constants/Message');

const GameCommand = {
  checkGameCommand(input) {
    this.checkNumber(input);
    this.checkLength(input);
    this.checkOneOrTwo(input);
  },

  checkNumber(input) {
    if (/\D/.test(input)) {
      throw new ValidationError(ERROR_MESSAGE.only_number);
    }
  },

  checkLength(input) {
    if (input.length !== 1) {
      throw new ValidationError(ERROR_MESSAGE.length_one);
    }
  },

  checkOneOrTwo(input) {
    if (!/1|2/.test(input)) {
      throw new ValidationError(ERROR_MESSAGE.one_or_two);
    }
  },
};

module.exports = GameCommand;
