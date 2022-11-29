const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../utils/constants/system');
const { getResultMessage } = require('../utils/services/message');

const OutputView = {
  start() {
    return Console.print(GAME_MESSAGE.start);
  },
  result(score) {
    const resultMessage = getResultMessage(score);
    return Console.print(resultMessage);
  },
  win() {
    return Console.print(GAME_MESSAGE.win);
  },
  close() {
    return Console.close();
  },
};

module.exports = OutputView;
