const { Random } = require('@woowacourse/mission-utils');

const RANDOM_NUMBER = Object.freeze({
  START: 1,
  END: 9,
  COUNTS: 3,
});

const generateNumber = {
  getNumber() {
    const { START, END, COUNTS } = RANDOM_NUMBER;
    const numbers = new Set();

    while (numbers.size < COUNTS) {
      const newNumber = Random.pickNumberInRange(START, END);
      numbers.add(newNumber);
    }

    return numbers;
  },
};

module.exports = generateNumber;
