const GameCommand = require('./GameCommand');
const GameNumber = require('./GameNumber');

class Validator {
  #gameNumber;

  #gameCommand;

  constructor() {
    this.#gameNumber = new GameNumber();
    this.#gameCommand = new GameCommand();
  }

  checkGameNumbers(input) {
    this.#gameNumber.checkGameNumbers(input);
  }

  checkGameCommand(input) {
    this.#gameCommand.checkGameCommand(input);
  }
}

module.exports = Validator;
