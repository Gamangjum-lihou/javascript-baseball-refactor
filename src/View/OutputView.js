const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
  },

  printHint({ ball, strike }) {
    if (!ball && !strike) return Console.print(`낫싱`);
    if (ball && strike) return Console.print(`${ball}볼 ${strike}스트라이크`);
    if (strike) return Console.print(`${strike}스트라이크`);
    Console.print(`${ball}볼`);
  },

  printError({ name, message, cause }) {
    Console.print(`${name} : ${message}\n[CAUSE] : ${cause}`);
  },

  printSuccess() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  },

  printGameEnd() {
    Console.print('잘못된 값을 입력하여 게임이 종료됩니다.');
    Console.close();
  },

  finishGame() {
    Console.close();
  },
};

module.exports = OutputView;
