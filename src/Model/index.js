const { createRandom } = require('../utils/services/clac');

class Model {
  #randomNum;

  #userNum;

  setUserNum(userNum) {
    this.#userNum = [...userNum].map(Number);
  }

  getUserNum() {
    return this.#userNum;
  }

  createRandomNum() {
    this.#randomNum = createRandom();
  }

  getRandomNum() {
    return this.#randomNum;
  }

  isSameNumbers() {
    return this.#userNum.toString() === [...this.#randomNum].toString();
  }
}

module.exports = Model;
