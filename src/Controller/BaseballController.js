const ReadError = require('../Error/ReadError');
const ValidationError = require('../Error/ValidationError');
const Validator = require('../Validator');
const { printHint } = require('../view/outputView');

class BaseballController {
  #view;

  #model;

  #validator;

  constructor(view, model) {
    this.#view = view;
    this.#model = model;
    this.#validator = new Validator();
  }

  start() {
    this.#view.pinrtStart();
    this.#setGame();
  }

  #setGame() {
    this.#model.setGame();
    return this.#inputGameNumbers();
  }

  #inputGameNumbers() {
    this.#view.readGameNumbers((numbers) => this.#checkGameNumbers(numbers));
  }

  #checkGameNumbers(numbers) {
    try {
      this.#validator.checkGameNumbers(numbers);
    } catch (error) {
      throw this.#handleError(error);
    }
    return this.#printHint(numbers);
  }

  #printHint(numbers) {
    this.#view.printHint(this.#model.compareUserWithComputerNumbers(numbers));
    return this.#threeStrikesOrNot();
  }

  #threeStrikesOrNot() {
    if (this.#model.isThreeStrikes()) {
      this.#view.printSuccess();
      return this.#inputGameCommand();
    }
    this.#model.resetStatus();
    return this.#inputGameNumbers();
  }

  #inputGameCommand() {
    this.#view.readGameCommand((number) => this.#checkGameCommand(number));
  }

  #checkGameCommand(number) {
    try {
      this.#validator.checkGameCommand(number);
    } catch (error) {
      return this.#handleError(error);
    }
    return this.#restartOrFinish(number);
  }

  #restartOrFinish(number) {
    if (number === '1') return this.#setGame();
    return this.#view.finishGame();
  }

  #handleError(error) {
    if (error instanceof ValidationError) {
      return this.#view.printError(new ReadError('Validation Error', error));
    }
    throw error;
  }
}

module.exports = BaseballController;
