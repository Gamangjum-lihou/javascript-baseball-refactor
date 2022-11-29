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
  calcResult(user, computer) {
    const score = { ball: 0, strike: 0 };
    user.forEach((number, index) => {
      const isStrike = clac.calcStrike(user, computer, index);
      score.strike += isStrike;
      score.ball += clac.calcBall(number, computer, isStrike);
    });
    return score;
  },
  calcStrike(user, computer, index) {
    return user[index] === [...computer][index] ? 1 : 0;
  },
  calcBall(number, computer, isStrike) {
    return !isStrike && computer.has(number) ? 1 : 0;
  },
};

module.exports = clac;
