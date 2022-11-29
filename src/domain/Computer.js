const { getNumer } = require('./RandomNumberGenerator');
const RANDOM_NUMBER_LENGTH = 3;

class Computer {
  #numbers = [];

  generateNumber() {
    while (this.numbers.length < RANDOM_NUMBER_LENGTH) {
      const newNumber = getNumer();
      this.#addNonDuplicate(newNumber);
    }
  }

  #addNonDuplicate(newNumber) {
    if (!this.#numbers.includes(newNumber)) {
      this.#numbers.push(newNumber);
    }
  }
}

module.exports = Computer;
