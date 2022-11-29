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
    this.#inputNumbers();
  }

  #inputNumbers() {
    this.#view.readNumbers((numbers) => this.#checkInput(numbers));
  }

  #checkInput(numbers) {
    try {
      this.#validator.checkGameNumbers(numbers);
    } catch (error) {
      return this.#handleError(error);
    }
    return this.#setGame(numbers);
  }

  #setGame(numbers) {
    this.#model.setGame();
    return this.#printHint(numbers);
  }

  #printHint(numbers) {
    this.#view.printHint(this.#model.compareUserWithComputerNumbers(numbers));
  }

  #handleError(error) {
    if (error instanceof ValidationError) {
      return this.#view.printError(new ReadError('Validation Error', error));
    }
    throw error;
  }
}

module.exports = BaseballController;
