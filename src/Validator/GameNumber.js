const ValidationError = require('../Error/ValidationError');
const checkNumber = require('./util/util');
const { ERROR_MESSAGE } = require('../Constants/Message');

class GameNumber {
  #input;

  checkGameNumbers(input) {
    this.#input = input;
    this.#checkNumber();
    this.#checkLength();
  }

  #checkNumber() {
    checkNumber(this.#input);
  }

  #checkLength() {
    if (this.#input.length !== 3) {
      throw new ValidationError(ERROR_MESSAGE.length_three);
    }
  }
}

module.exports = GameNumber;
