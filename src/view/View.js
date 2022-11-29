const { Console } = require('@woowacourse/mission-utils');
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

  win() {
    print(Messages.RESULT_SUCCESS);
  },

  inputCommand(callback) {
    input(Messages.INPUT_COMMAND, callback);
  },

  end() {
    Console.close();
  },
};

module.exports = View;
