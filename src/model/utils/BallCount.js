const { ONE, ZERO } = require('../../constants/Number');

class BallCount {
  #count = { strike: ZERO, ball: ZERO };

  constructor(inputNumbers, answer) {
    this.#countMatch(inputNumbers, answer);
  }

  #countMatch(inputNumbers, answer) {
    return [...inputNumbers].forEach((number, index) => {
      this.#checkStrike(number, answer, index);
      this.#checkBall(number, answer, index);
    });
  }

  #checkStrike(number, answer, index) {
    if (number === answer[index]) {
      this.#count.strike += ONE;
    }
  }

  #checkBall(number, answer, index) {
    if (answer.includes(number) && number !== answer[index]) {
      this.#count.ball += ONE;
    }
  }

  getCount() {
    return this.#count;
  }
}

module.exports = BallCount;
