const Messages = Object.freeze({
  GAME_START: '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBERS: '숫자를 입력하세요 : ',
  RESULT_BALL: num => `${num}볼`,
  RESULT_STRIKE: num => `${num}스트라이크`,
  RESULT_NOTHING: '낫싱',
  RESULT_SUCCESS: '3개의 숫자를 모두 맞혔습니다! 게임 종료',
  INPUT_COMMAND: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
});

module.exports = Messages;
