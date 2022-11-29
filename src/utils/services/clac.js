const { Random } = require('@woowacourse/mission-utils');
const { NUMBER_RANGE } = require('../constants/system');

const clac = {
  createRandom() {
    const randomNum = new Set();
    const { size, min, max } = NUMBER_RANGE;
    while (randomNum.size < size) {
      const number = Random.pickNumberInRange(min, max);
      randomNum.add(number);
    }

    return randomNum;
  },
  /**
   *
   * @param {Array} user
   * @param {Set} computer
   * @returns
   */
  calcResult(user, computer) {
    const computerArr = [...computer];
    const score = { ball: 0, strike: 0 };
    user.forEach((number, index) => {
      const isStrike = clac.calcStrike(user, computerArr, index);
      score.strike += isStrike;
      score.ball += clac.calcBall(number, computer, isStrike);
    });
    return score;
  },
  /**
   *
   * @param {Array} user
   * @param {Array} computer
   * @param {number} index
   * @returns
   */
  calcStrike(user, computer, index) {
    return user[index] === computer[index] ? 1 : 0;
  },
  /**
   *
   * @param {number} number
   * @param {set} computer
   * @param {number} isStrike
   * @returns
   */
  calcBall(number, computer, isStrike) {
    return !isStrike && computer.has(number) ? 1 : 0;
  },
};

module.exports = clac;
