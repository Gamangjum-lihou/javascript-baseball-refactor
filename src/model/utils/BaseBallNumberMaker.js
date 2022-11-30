const { Random } = require('@woowacourse/mission-utils');
const { BLANK } = require('../../constants/BaseBall');
const { NUMBER } = require('../../constants/Number');

const BaseBallNumberMaker = {
  makeRandomNumbers(length) {
    const RandomNumberSet = new Set();
    while (RandomNumberSet.size < length) {
      RandomNumberSet.add(Random.pickNumberInRange(NUMBER.min, NUMBER.max));
    }
    return [...RandomNumberSet].join(BLANK);
  },
};

module.exports = BaseBallNumberMaker;
