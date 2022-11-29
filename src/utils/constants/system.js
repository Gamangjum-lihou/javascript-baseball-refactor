const BASEBALL_TYPE = Object.freeze({
  ball: '볼',
  strike: '스트라이크',
  nothing: '낫싱',
});

const LINE_BREAK = '\n';

const GAME_COMMAND = Object.freeze({
  again: 1,
  quit: 2,
});

const GAME_MESSAGE = Object.freeze({
  start: '숫자 야구 게임을 시작합니다.',
  input: '숫자를 입력해주세요 : ',
  ball: (count) => `${count}${BASEBALL_TYPE.ball}`,
  strike: (count) => `${count}${BASEBALL_TYPE.strike}`,
  win: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  againOrQuit: `게임을 새로 시작하려면 ${GAME_COMMAND.again}, 종료하려면 ${GAME_COMMAND.quit}를 입력하세요.${LINE_BREAK}`,
});

const NUMBER_RANGE = Object.freeze({
  min: 1,
  max: 9,
  size: 3,
});

module.exports = {
  BASEBALL_TYPE,
  GAME_COMMAND,
  GAME_MESSAGE,
  LINE_BREAK,
  NUMBER_RANGE,
};
