const { getNumber } = require('../utils/generateNumber');

class Computer {
  #numbers;

  generateNumber() {
    this.#numbers = getNumber();
    console.log(this.#numbers);
  }

  getScore(input) {
    const computer = [...this.#numbers];
    const score = { ball: 0, strike: 0 };

    [...input].map(Number).forEach((num, index) => {
      if (this.#isStrike(num, computer, index)) score.strike += 1;
      if (this.#isBall(num, computer, index)) score.ball += 1;
    });

    console.log(score.strike);

    return score;
  }

  #isStrike(num, computer, index) {
    return num === computer[index];
  }

  #isBall(num, computer, index) {
    return !this.#isStrike(num, computer, index) && this.#numbers.has(num);
  }
}

module.exports = Computer;
