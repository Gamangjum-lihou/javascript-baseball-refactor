const { Random } = require('@woowacourse/mission-utils');

const RANDOM_NUMBER = Object.freeze({
  START: 1,
  END: 9,
});

const pickNumer = {
  getNumer() {
    return Random.pickNumberInRange(RANDOM_NUMBER.START, RANDOM_NUMBER.END);
  },
};

module.exports = pickNumer;
