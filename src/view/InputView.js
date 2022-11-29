const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  input(message, callback) {
    Console.readLine(message, callback);
  },
};

module.exports = InputView;
