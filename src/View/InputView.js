const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE, LINE_BREAK } = require('../utils/constants/system');

const InputView = {
  readLine(message, callback) {
    return Console.readLIne(message + LINE_BREAK, callback);
  },
  userNumber(callback) {
    return Console.readLine(GAME_MESSAGE.input, callback);
  },
  againOrQuit(callback) {
    return Console.readLine(GAME_MESSAGE.againOrQuit, callback);
  },
};

module.exports = InputView;
