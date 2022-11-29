const { checkNumber, checkLength, checkDuplicate, checkOneOrTwo } = require('../InputValidation');
const IoView = require('../view/IoView');
const BaseBallGame = require('../model/BaseBallGame');
const { END_COUNT } = require('../constants/BaseBall');
const { STRING_ONE } = require('../constants/Number');

class Presenter {
  #baseBallGame;

  constructor() {
    IoView.printStart();
  }

  run() {
    this.#baseBallGame = new BaseBallGame();
    this.match();
  }

  match() {
    IoView.readNumber((input) => {
      Presenter.#checkValidation(input);
      const ballCount = this.#baseBallGame.makeBallCountFormat(input);
      IoView.printCount(ballCount);
      return ballCount === END_COUNT ? this.retry() : this.match();
    });
  }

  static #checkValidation(input) {
    checkNumber(input);
    checkLength(input);
    checkDuplicate(input);
  }

  retry() {
    IoView.printFinish();
    IoView.readRetry((input) => {
      checkOneOrTwo(input);
      return input === STRING_ONE ? this.run() : IoView.printEnd();
    });
  }
}

module.exports = Presenter;
