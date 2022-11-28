const Player = require('../src/Model/Player');

describe('Player Model test', () => {
  test('플레이어 모델에서 값이 정상적으로 입력되는지 확인  ', () => {
    // 조건
    const input = '135'.split('').map(Number);

    // 실행
    const player = new Player();
    player.storeNumber(input);

    // 평가
    expect(input).toEqual(player.getNumber());
  });

  test('플레이어 모델에서 볼카운트가 정상적으로 입력되는지 확인  ', () => {
    // 조건
    const input = { strike: 1, ball: 2 };

    // 실행
    const player = new Player();
    player.storeBallCounts(input);

    // 평가
    expect(input).toEqual(player.getBallCounts());
  });
});
