const ValidationError = require('../Error/ValidationError');
const checkNumber = require('./util/util');

class GameCommand {
  #input;

  checkGameCommand(input) {
    this.#input = input;
    this.#checkNumber();
    this.#checkLength();
  }

  #checkNumber() {
    checkNumber(this.#input);
  }

  #checkLength() {
    if (this.#input.length !== 1) {
      throw new ValidationError('1자리수가 아닙니다.');
    }
  }
}

module.exports = GameCommand;
