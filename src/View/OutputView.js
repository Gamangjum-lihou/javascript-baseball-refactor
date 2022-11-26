const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../Constants/Message');

const OutputView = {
  printStart() {
    Console.print(GAME_MESSAGE.start);
  },

  printStatus(ballCounts) {
    if (ballCounts.strike && ballCounts.ball) Console.print(`${ballCounts.ball}볼 ${ballCounts.strike}스트라이크`);
    if (ballCounts.strike && !ballCounts.ball) Console.print(`${ballCounts.strike}스트라이크`);
    if (!ballCounts.strike && ballCounts.ball) Console.print(`${ballCounts.ball}볼`);
    if (!ballCounts.strike && !ballCounts.ball) Console.print('낫싱');
  },

  printClear() {
    Console.print(GAME_MESSAGE.end);
  },
};

module.exports = OutputView;
