const ReadError = require('../Error/ReadError');
const ValidationError = require('../Error/ValidationError');
const Validator = require('../Validator');

const RESTART = '1';
const GAME_NUMBER = 'checkGameNumbers';
const GAME_COMMAND = 'checkGameCommand';

class BaseballController {
  #view;

  #model;

  #validator;

  constructor(view, model) {
    this.#view = view;
    this.#model = model;
    this.#validator = Validator;
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
    this.#view.readGameNumbers(this.#gameNumbersHandler.bind(this));
  }

  #gameNumbersHandler(input) {
    if (this.#hasErrorWhanCheckInput(input, GAME_NUMBER)) return this.#inputGameNumbers();
    this.#view.printHint(this.#model.compareUserWithComputerNumbers(input));
    if (this.#model.isThreeStrikes()) return this.#threeStrikes();
    this.#inputGameNumbers();
  }

  #threeStrikes() {
    this.#view.printSuccess();
    this.#inputGameCommand();
  }

  #inputGameCommand() {
    this.#view.readGameCommand(this.#gameCommandHandler.bind(this));
  }

  #gameCommandHandler(input) {
    if (this.#hasErrorWhanCheckInput(input, GAME_COMMAND)) return this.#inputGameCommand();
    this.#restartOrFinish(input);
  }

  #restartOrFinish(number) {
    if (number === RESTART) return this.#setGame();
    return this.#view.finishGame();
  }

  #hasErrorWhanCheckInput(numbers, inputName) {
    try {
      this.#validator[inputName](numbers);
    } catch (error) {
      return this.#handleError(error);
    }
  }

  #handleError(error) {
    if (error instanceof ValidationError) {
      this.#view.printError(new ReadError('Validation Error', error));
      return true;
    }
    throw error;
  }
}

module.exports = BaseballController;
