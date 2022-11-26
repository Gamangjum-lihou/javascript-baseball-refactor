const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../Constants/Message');
const { checkCorrectNumber, checkCorrectCommand } = require('../Util/Validation');

const InputView = {
  readPlayerCommand(callback) {
    Console.readLine(GAME_MESSAGE.inGame, (input) => {
      checkCorrectNumber(input);
      callback(input);
    });
  },

  readRetryCommand(callback) {
    Console.readLine(GAME_MESSAGE.option, (input) => {
      checkCorrectCommand(input);
      callback(input);
    });
  },

  exit() {
    return Console.close();
  },
};

module.exports = InputView;
