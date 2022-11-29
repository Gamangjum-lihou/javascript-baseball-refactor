const InputView = require('./InputView');
const OutputView = require('./outputView');

class View {
  #input;

  #output;

  constructor() {
    this.#input = InputView;
    this.#output = OutputView;
  }

  readGameNumbers(callback) {
    this.#input.readLine('숫자를 입력해주세요', callback);
  }

  readGameCommand(callback) {
    this.#input.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', callback);
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
