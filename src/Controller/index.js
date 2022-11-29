const { GAME_COMMAND } = require('../utils/constants/system');
const { calcResult } = require('../utils/services/clac');
const { userNumberValidation, userAgainOrQuitValidation } = require('../utils/services/validation');

class Controller {
  #model;

  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
  }

  start(isFirstStart = true) {
    if (isFirstStart) this.#view.printStart();
    this.#model.createRandomNum();
    this.readUserInput();
  }

  readUserInput() {
    this.#view.readNumber(this.userNumberHandler.bind(this));
  }

  userNumberHandler(input) {
    userNumberValidation(input);
    this.#model.setUserNum(input);
    this.clacResult();
  }

  clacResult() {
    this.result();
    if (this.#model.isSameNumbers()) return this.win();
    return this.round();
  }

  win() {
    this.#view.printWin();
    this.#view.readAgainOrQuit(this.againOrQuitHandler.bind(this));
  }

  againOrQuitHandler(input) {
    userAgainOrQuitValidation(input);
    const { again, quit } = GAME_COMMAND;
    const numberInput = Number(input);
    if (numberInput === again) this.start(false);
    if (numberInput === quit) this.#view.close();
  }

  result() {
    const score = this.#model.getResult();
    this.#view.printResult(score);
  }

  round() {
    this.readUserInput();
  }
}

module.exports = Controller;
