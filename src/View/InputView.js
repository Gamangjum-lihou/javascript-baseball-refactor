const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../Constants/Message');

const InputView = {
  readPlayerCommand(callback) {
    Console.readLine(GAME_MESSAGE.inGame, (input) => {
      callback(input);
    });
  },

  readRetryCommand(callback) {
    Console.readLine(GAME_MESSAGE.option, (input) => {
      callback(input);
    });
  },

  exit() {
    return Console.close();
  },
};

module.exports = InputView;
