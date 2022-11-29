const { getNumber } = require('../utils/Random');

class Computer {
  #numbers;

  generateNumber() {
    this.#numbers = getNumber();
  }
}

module.exports = Computer;
