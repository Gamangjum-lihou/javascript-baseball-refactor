// const { error } = require('./Error');

const RANDOM_NUMBER_LENGTH = 3;

const Validator = {
  isFitLength(input) {
    return input.length === RANDOM_NUMBER_LENGTH;
  },

  isNumber(input) {
    const regex = /[1-9]{3}/g;
    const isNumber = regex.test(Number(input));

    return isNumber;
  },

  // #isValidGameEndInput() {
  //   return this.input === EXECPTION_CONDITION.RESTART || this.input === EXECPTION_CONDITION.END;
  // }

  // isResetOrAndInput(input) {
  //   this.input = input;

  //   if (this.#isValidGameEndInput() === false) return this.#throwTypeError();
  // }
};

module.exports = Validator;
