const { Random } = require('@woowacourse/mission-utils');

const BaseBallNumberMaker = {
  makeRandomNumbers(length) {
    const RandomNumberSet = new Set();
    while (RandomNumberSet.size < length) {
      RandomNumberSet.add(Random.pickNumberInRange(1, 9));
    }
    return [...RandomNumberSet].join('');
  },
};

module.exports = BaseBallNumberMaker;
