const ValidationError = require('../Error/ValidationError');
const checkNumber = require('./util/util');
const { ERROR_MESSAGE } = require('../Constants/Message');

class GameNumber {
  #input;

  checkGameNumbers(input) {
    this.#input = input;
    this.#checkNumber();
    this.#checkLength();
    this.#checkZero();
    this.#checkDuplication();
  }

  #checkNumber() {
    checkNumber(this.#input);
  }

  #checkLength() {
    if (this.#input.length !== 3) {
      throw new ValidationError(ERROR_MESSAGE.length_three);
    }
  }

  #checkZero() {
    if (/0/.test(this.#input)) {
      throw new ValidationError(ERROR_MESSAGE.not_zero);
    }
  }

  #checkDuplication() {
    if (this.#isDuplication()) {
      throw new ValidationError(ERROR_MESSAGE.not_duplication);
    }
  }

  #isDuplication() {
    const check = new Set(this.#input);
    return this.#input.length !== check.size;
  }
}

module.exports = GameNumber;
