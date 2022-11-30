const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE, OUTPUT_MESSAGE } = require('../constants/Message');

const IoView = {
  readNumber(callback) {
    Console.readLine(INPUT_MESSAGE.number, callback);
  },
  readRetry(callback) {
    Console.readLine(INPUT_MESSAGE.retry, callback);
  },
  printStart() {
    Console.print(OUTPUT_MESSAGE.start);
  },
  printCount(ballCount) {
    Console.print(ballCount);
  },
  printFinish() {
    Console.print(OUTPUT_MESSAGE.finish);
  },
  printEnd() {
    Console.close();
  },
};

module.exports = IoView;
