const InputView = require('./InputView');
const OutputView = require('./outputView');

class View {
  #input;

  #output;

  constructor() {
    this.#input = InputView;
    this.#output = OutputView;
  }

  readNumbers(callback) {
    this.#input.readLine('숫자를 입력해주세요', callback);
  }

  printError(error) {
    this.#output.printError(error);
  }

  pinrtStart() {
    this.#output.printStart();
  }

  printHint(value) {
    this.#output.printHint(value);
  }
}

module.exports = View;
