const { input } = require('./InputView');
const { print } = require('./OutputView');
const Messages = require('../utils/Messages');

const View = {
  start() {
    print(Messages.GAME_START);
  },

  inputNumber(callback) {
    input(Messages.INPUT_NUMBERS, callback);
  },

  printResult(message) {
    print(message);
  },

  inputCommand(callback) {
    input(Messages.INPUT_COMMAND, callback);
  },
};

module.exports = View;
