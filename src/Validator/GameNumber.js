const ValidationError = require('../Error/ValidationError');
const checkNumber = require('./util/util');

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
      throw new ValidationError('3자리수가 아닙니다.');
    }
  }
}

module.exports = GameNumber;
