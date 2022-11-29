const { Random } = require('@woowacourse/mission-utils');
const { NUMBER } = require('../../constants/Number');

const BaseBallNumberMaker = {
  makeRandomNumbers(length) {
    const RandomNumberSet = new Set();
    while (RandomNumberSet.size < length) {
      RandomNumberSet.add(Random.pickNumberInRange(NUMBER.min, NUMBER.max));
    }
    return [...RandomNumberSet].join('');
  },
};

module.exports = BaseBallNumberMaker;
