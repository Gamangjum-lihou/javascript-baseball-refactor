class BallCount {
  #count = { strike: 0, ball: 0 };

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
      this.#count.strike += 1;
    }
  }

  #checkBall(number, answer, index) {
    if (answer.includes(number) && number !== answer[index]) {
      this.#count.ball += 1;
    }
  }

  getCount() {
    return this.#count;
  }
}

module.exports = BallCount;
