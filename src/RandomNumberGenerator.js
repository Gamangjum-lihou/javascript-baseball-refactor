const { Random } = require('@woowacourse/mission-utils');
const GENERATOR = require('./Constants/System');

const RandomNumberGenerator = {
  generateRandomNumber() {
    const computer = [];
    while (computer.length < GENERATOR.pick_number_end) {
      const number = Random.pickNumberInRange(GENERATOR.start_number, GENERATOR.end_number);
      if (!computer.includes(number)) computer.push(number);
    }
    return computer;
  },
};

module.exports = RandomNumberGenerator;
