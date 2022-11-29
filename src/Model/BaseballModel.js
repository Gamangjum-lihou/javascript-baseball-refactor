const RandomNumberGenerator = require('../RandomNumberGenerator');

class BaseballModel {
  #computerNumbers;

  #score;
  setGame() {
    this.#saveComputerNumbers();
    this.resetStatus();
  }
  #saveComputerNumbers() {
    this.#computerNumbers = RandomNumberGenerator.generateRandomNumber();
  }
  compareUserWithComputerNumbers(input) {
    input.split('').forEach((cur, index) => {
      const isStrike =
        this.#computerNumbers.includes(Number(cur)) && this.#computerNumbers.indexOf(Number(cur)) === index;
      const isBall = this.#computerNumbers.includes(Number(cur));
      if (isStrike) this.#score.strike += 1;
      if (!isStrike && isBall) this.#score.ball += 1;
    });
    return this.#score;
  }

  resetStatus() {
    this.#score = { ball: 0, strike: 0 };
  }

  isThreeStrikes() {
    return this.#score.strike === 3;
  }
}

module.exports = BaseballModel;
