const GAME_MESSAGE = {
  start: '숫자 야구 게임을 시작합니다.',
  inGame: '숫자를 입력해주세요 : ',
  end: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  option: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
};

const ERROR_MESSAGE = {
  invalidNumber: '[ERR] 유효하지 않은 입력입니다',
  invalidCommand: '[ERR] 유효하지 않은 종료/재시작 입력입니다',
};

module.exports = {
  GAME_MESSAGE,
  ERROR_MESSAGE,
};
