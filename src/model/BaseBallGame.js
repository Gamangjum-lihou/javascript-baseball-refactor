const { BASEBALL, BLANK } = require('../constants/BaseBall');
const { NUMBER, ZERO } = require('../constants/Number');
const BallCount = require('./utils/BallCount');
const { makeRandomNumbers } = require('./utils/BaseBallNumberMaker');

class BaseBallGame {
  #answer;

  constructor() {
    this.#answer = makeRandomNumbers(NUMBER.baseball_length);
  }

  makeBallCountFormat(input) {
    const { ball, strike } = new BallCount(input, this.#answer).getCount();
    const format = BaseBallGame.#makeBallFormat(ball) + BaseBallGame.#makeStrikeFormat(strike);
    return format === BLANK ? BASEBALL.nothing : format;
  }

  static #makeBallFormat(ball) {
    return ball !== ZERO ? `${ball}${BASEBALL.ball} ` : BLANK;
  }

  static #makeStrikeFormat(strike) {
    return strike !== ZERO ? `${strike}${BASEBALL.strike}` : BLANK;
  }
}

module.exports = BaseBallGame;
