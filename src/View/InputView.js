const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readPlayerCommand(callback) {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      callback(input);
    });
  },

  readRetryCommand(callback) {
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (input) => {
      callback(input);
    });
  },

  exit() {
    return Console.close();
  },
};

module.exports = InputView;
