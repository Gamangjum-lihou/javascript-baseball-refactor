const BallCount = require('./utils/BallCount');
const { makeRandomNumbers } = require('./utils/BaseBallNumberMaker');

class BaseBallGame {
  #answer;

  constructor() {
    this.#answer = makeRandomNumbers(3);
  }

  makeBallCountFormat(input) {
    const { ball, strike } = new BallCount(input, this.#answer).getCount();
    const format = BaseBallGame.#makeBallFormat(ball) + BaseBallGame.#makeStrikeFormat(strike);
    return format === '' ? format : '낫싱';
  }

  static #makeBallFormat(ball) {
    return ball !== 0 ? `${ball}볼 ` : '';
  }

  static #makeStrikeFormat(strike) {
    return strike !== 0 ? `${strike}스트라이크` : '';
  }
}

module.exports = BaseBallGame;
