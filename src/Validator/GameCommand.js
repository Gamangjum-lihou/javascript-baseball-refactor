const ValidationError = require('../Error/ValidationError');
const checkNumber = require('./util/util');
const { ERROR_MESSAGE } = require('../Constants/Message');

class GameCommand {
  #input;

  checkGameCommand(input) {
    this.#input = input;
    this.#checkNumber();
    this.#checkLength();
    this.#checkOneOrTwo();
  }

  #checkNumber() {
    checkNumber(this.#input);
  }

  #checkLength() {
    if (this.#input.length !== 1) {
      throw new ValidationError(ERROR_MESSAGE.length_one);
    }
  }

  #checkOneOrTwo() {
    if (!/1|2/.test(this.#input)) {
      throw new ValidationError(ERROR_MESSAGE.one_or_two);
    }
  }
}

module.exports = GameCommand;
