const IoView = require('../view/IoView');
const BaseBallGame = require('../model/BaseBallGame');

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
      const ballCount = this.#baseBallGame.makeBallCountFormat(input);
      IoView.printCount(ballCount);
      return ballCount === '3스트라이크' ? this.retry() : this.match();
    });
  }

  retry() {
    IoView.readRetry((input) => (input === '1' ? this.run() : IoView.printEnd()));
  }
}

module.exports = Presenter;
