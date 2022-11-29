const { Random } = require('@woowacourse/mission-utils');

const RANDOM_NUMBER = Object.freeze({
  START: 1,
  END: 9,
  COUNTS: 3,
});

const pickNumer = {
  getNumber() {
    const { START, END, COUNTS } = RANDOM_NUMBER;
    const set = new Set();

    while (set.size < COUNTS) {
      const newNumber = Random.pickNumberInRange(START, END);
      set.add(newNumber);
    }

    return [...set];
  },
};

module.exports = pickNumer;
