const { Random } = require('@woowacourse/mission-utils');

class Computer {
  #number;

  constructor() {
    this.#number = this.generate();
    console.log(this.#number);
  }

  generate() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  getNumber() {
    return this.#number;
  }
}

module.exports = Computer;
