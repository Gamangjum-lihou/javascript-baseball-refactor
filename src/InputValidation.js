const { ERROR_MESSAGE } = require('./constants/Message');
const { STRING_ONE, STRING_TWO } = require('./constants/Number');

const InputValidation = {
  checkNumber(input) {
    const RegExp = /^[1-9]+$/g;
    if (!RegExp.test(input)) {
      throw new Error(ERROR_MESSAGE.number);
    }
  },
  checkLength(input) {
    if (input.length !== 3) {
      throw new Error(ERROR_MESSAGE.length);
    }
  },
  checkDuplicate(input) {
    const inputSet = new Set([...input]);
    if (inputSet.size !== input.length) {
      throw new Error(ERROR_MESSAGE.duplicate);
    }
  },
  checkOneOrTwo(input) {
    if (!(input === STRING_ONE || input === STRING_TWO)) {
      throw new Error(ERROR_MESSAGE.retry);
    }
  },
};

module.exports = InputValidation;
