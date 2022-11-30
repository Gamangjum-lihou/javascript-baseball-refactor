const { Console } = require('@woowacourse/mission-utils');
const { input } = require('./InputView');
const { print } = require('./OutputView');

const MESSAGES = require('../utils/MESSAGES');

const View = {
  start() {
    print(MESSAGES.GAME_START);
  },

  inputNumber(callback) {
    input(MESSAGES.INPUT_NUMBERS, callback);
  },

  printResult(message) {
    print(message);
  },

  win() {
    print(MESSAGES.RESULT_SUCCESS);
  },

  inputCommand(callback) {
    input(MESSAGES.INPUT_COMMAND, callback);
  },

  end() {
    Console.close();
  },
};

module.exports = View;
