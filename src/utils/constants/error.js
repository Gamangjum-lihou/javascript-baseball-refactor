const { GAME_COMMAND, NUMBER_RANGE } = require('./system');

const ERROR_CODE = '[ERROR]';
const ERROR_MESSAGE = Object.freeze({
  number: '숫자를 입력해주세요.',
  length: `${NUMBER_RANGE.size}개의 숫자를 입력해주세요.`,
  overlap: '중복되지 않는 숫자를 입력해주세요.',
  range: `${NUMBER_RANGE.min}부터 ${NUMBER_RANGE.max}까지의 숫자를 입력해주세요.`,
  againOrQuit: `${GAME_COMMAND.again} 또는 ${GAME_COMMAND.again}를 입력해주세요.`,
});

module.exports = {
  ERROR_CODE,
  ERROR_MESSAGE,
};
