// const { error } = require('./Error');

const RANDOM_NUMBER_LENGTH = 3;
const INPUT_COMMAND = Object.freeze({
  RESTART: 1,
  END: 2,
});

const Validator = {
  isFitLength(input) {
    return input.length === RANDOM_NUMBER_LENGTH;
  },

  isNumber(input) {
    const regex = /[1-9]{3}/g;
    const isNumber = regex.test(Number(input));

    return isNumber;
  },

  isValidCommand(input) {
    return Number(input) === INPUT_COMMAND.RESTART || Number(input) === INPUT_COMMAND.END;
  },
};

module.exports = Validator;
