const GameNumber = require('./GameNumber');

class Validator {
  #gameNumber;

  constructor() {
    this.#gameNumber = new GameNumber();
  }

  checkGameNumbers(input) {
    this.#gameNumber.checkGameNumbers(input);
  }
}

module.exports = Validator;
