const ValidationError = require('../Error/ValidationError');
const checkNumber = require('./util/util');
const { ERROR_MESSAGE } = require('../Constants/Message');

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
      throw new ValidationError(ERROR_MESSAGE.length_one);
    }
  }
}

module.exports = GameCommand;
