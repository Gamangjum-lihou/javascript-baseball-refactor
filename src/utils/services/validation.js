const { NUMBER_RANGE, GAME_COMMAND } = require('../constants/system');
const CustomError = require('../../Error');
const { ERROR_MESSAGE } = require('../constants/error');

const isNumber = (numbers) => numbers.every((number) => !Number.isNaN(number));
const isCorrectLength = (numbers) => numbers.length === NUMBER_RANGE.size;
const isOverlap = (numbers) => numbers.length === new Set(numbers).size;
const isRange = (numbers) => {
  const { min, max } = NUMBER_RANGE;
  return numbers.every((number) => min <= Number(number) && Number(number) <= max);
};
const isIncludesObjectValues = (option, input) => Object.values(option).includes(Number(input));

const userNumberValidation = (numbers) => {
  const numberArray = [...numbers];
  const {
    number, length, overlap, range,
  } = ERROR_MESSAGE;
  if (!isNumber(numberArray)) throw new CustomError(number);
  if (!isCorrectLength(numberArray)) throw new CustomError(length);
  if (!isOverlap(numberArray)) throw new CustomError(overlap);
  if (!isRange(numberArray)) throw new CustomError(range);
};

const userAgainOrQuitValidation = (input) => {
  if (!isIncludesObjectValues(GAME_COMMAND, input)) {
    throw new CustomError(ERROR_MESSAGE.againOrQuit);
  }
};

module.exports = {
  userNumberValidation,
  userAgainOrQuitValidation,
};
