const { ERROR_MESSAGE } = require('../Constants/Message');

function checkCorrectNumber(input) {
  const RegExp = /^[1-9]{3}$/;
  if (!RegExp.test(input)) throw new Error(`${ERROR_MESSAGE.invalidNumber}`);
}

function checkCorrectCommand(input) {
  const RegExp = /^[1-2]{1}$/;
  if (!RegExp.test(input)) throw new Error(`${ERROR_MESSAGE.invalidCommand}`);
}

module.exports = {
  checkCorrectNumber,
  checkCorrectCommand,
};
