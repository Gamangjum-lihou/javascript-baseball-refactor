const Computer = require('./domain/Computer');
const Validator = require('./validator/Validator');
const View = require('./view/View');
const MESSAGES = require('./utils/MESSAGES');

const GAME_NUMBER = Object.freeze({
  MIN: 0,
  MAX: 3,
});

const INPUT_COMMAND = Object.freeze({
  RESTART: 1,
  END: 2,
});

class GameController {
  #computer;

  constructor(computer) {
    this.#computer = computer;
  }

  start(isFirst = true) {
    if (isFirst) View.start();
    this.#computer.generateNumber();
    this.#getNumber();
  }

  #getNumber() {
    View.inputNumber(this.#getScore.bind(this));
  }

  #getScore(input) {
    this.#validteBaseBall(input);
    const result = this.#getResult(input);
    const message = this.#getMessage(result);
    View.printResult(message);
    this.#checkWin(result);
  }

  #validteBaseBall(input) {
    if (!Validator.isFitLength(input)) throw new Error();
    if (!Validator.isNumber(input)) throw new Error();
    if (Validator.isDuplicate(input)) throw new Error();
  }

  #getResult(input) {
    return this.#computer.getScore(input);
  }

  #getMessage({ ball, strike }) {
    if (ball === GAME_NUMBER.MIN && strike === GAME_NUMBER.MIN) return MESSAGES.RESULT_NOTHING;
    if (ball === GAME_NUMBER.MIN || strike === GAME_NUMBER.MAX) return `${MESSAGES.RESULT_STRIKE(strike)}`;
    if (strike === GAME_NUMBER.MIN) return `${MESSAGES.RESULT_BALL(ball)}`;
    return `${MESSAGES.RESULT_BALL(ball)} ${MESSAGES.RESULT_STRIKE(strike)}`;
  }

  #checkWin({ _, strike }) {
    if (strike === GAME_NUMBER.MAX) {
      View.win();
      this.#restartOrQuit();
    }
    return this.#getNumber();
  }

  #restartOrQuit() {
    View.inputCommand(this.#getCommand.bind(this));
  }

  #getCommand(input) {
    this.#validteCommand(input);
    if (Number(input) === INPUT_COMMAND.RESTART) this.start(false);
    if (Number(input) === INPUT_COMMAND.END) View.end();
  }

  #validteCommand(input) {
    if (!Validator.isValidCommand(input)) throw new Error();
  }
}

module.exports = GameController;
