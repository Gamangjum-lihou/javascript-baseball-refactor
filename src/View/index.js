const InputView = require('./InputView');
const OutputView = require('./OutputView');

class View {
  #input;

  #output;

  constructor() {
    this.#input = InputView;
    this.#output = OutputView;
  }

  printStart() {
    this.#output.start();
  }

  printResult(score) {
    this.#output.result(score);
  }

  printWin() {
    this.#output.win();
  }

  readNumber(callback) {
    return this.#input.userNumber(callback);
  }

  readAgainOrQuit(callback) {
    return this.#input.againOrQuit(callback);
  }

  close() {
    return this.#output.close();
  }
}

module.exports = View;
