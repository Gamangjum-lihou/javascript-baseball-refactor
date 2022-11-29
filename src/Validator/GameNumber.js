const ValidationError = require('../Error/ValidationError');

class GameNumber {
  #input;

  checkGameNumbers(input) {
    this.#input = input;
    this.#checkNumber();
    this.#checkLength();
  }

  #checkNumber() {
    if (/\D/.test(this.#input)) {
      throw new ValidationError('숫자이외의 다른 문자가 존재합니다.');
    }
  }

  #checkLength() {
    if (this.#input.length !== 3) {
      throw new ValidationError('3자리수가 아닙니다.');
    }
  }
}

module.exports = GameNumber;
