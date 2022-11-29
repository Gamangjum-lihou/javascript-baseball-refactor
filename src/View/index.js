const InputView = require('./InputView');
const OutputView = require('./outputView');
const { INPUT_MESSAGE } = require('../Constants/Message');

class View {
  #input;

  #output;

  constructor() {
    this.#input = InputView;
    this.#output = OutputView;
  }

  readGameNumbers(callback) {
    this.#input.readLine(`${INPUT_MESSAGE.game_number}`, callback);
  }

  readGameCommand(callback) {
    this.#input.readLine(`${INPUT_MESSAGE.game_command}`, callback);
  }

  printError(error) {
    this.#output.printError(error);
    this.#output.printGameEnd();
  }

  pinrtStart() {
    this.#output.printStart();
  }

  printHint(value) {
    this.#output.printHint(value);
  }

  printSuccess() {
    this.#output.printSuccess();
  }

  finishGame() {
    this.#output.finishGame();
  }
}

module.exports = View;
