class Player {
  #numbers;

  #ballCounts;

  storeNumber(numbers) {
    this.#numbers = numbers;
  }

  storeBallCounts(ballCounts) {
    this.#ballCounts = ballCounts;
  }

  getNumber() {
    return this.#numbers;
  }

  getBallCounts() {
    return this.#ballCounts;
  }
}

module.exports = Player;
