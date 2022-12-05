const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../Constants/Message');

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.start);
  },

  printHint({ ball, strike }) {
    if (!ball && !strike) return Console.print(OUTPUT_MESSAGE.noting);
    if (ball && strike) return Console.print(OUTPUT_MESSAGE.ball_and_strike(ball, strike));
    if (strike) return Console.print(OUTPUT_MESSAGE.strike(strike));
    Console.print(OUTPUT_MESSAGE.ball(ball));
  },

  printError({ name, message, cause }) {
    Console.print(OUTPUT_MESSAGE.error(name, message, cause));
  },

  printSuccess() {
    Console.print(OUTPUT_MESSAGE.success);
  },

  printGameEnd() {
    Console.print(OUTPUT_MESSAGE.end);
    Console.close();
  },

  finishGame() {
    Console.close();
  },
};

module.exports = OutputView;
