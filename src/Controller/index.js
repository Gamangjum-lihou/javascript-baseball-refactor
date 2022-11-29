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
    this.#model.setUserNum([...input]);
    this.clacResult();
  }

  clacResult() {
    const user = this.#model.getUserNum();
    const computer = this.#model.getRandomNum();
    this.result();
    if (user.toString() === [...computer].toString()) return this.win();
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
    const user = this.#model.getUserNum();
    const computer = this.#model.getRandomNum();
    const score = calcResult(user, computer);
    this.#view.printResult(score);
  }

  round() {
    this.readUserInput();
  }
}

module.exports = Controller;
