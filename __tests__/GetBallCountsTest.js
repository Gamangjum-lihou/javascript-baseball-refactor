const getBallCounts = require('../src/Util/getBallCounts');

describe('GetBallCounts test', () => {
  test('결과값은 0스트라이크 3볼이다.', () => {
    // 조건
    const ballCounts = [
      [2, 3, 1],
      [3, 1, 2],
    ];
    const computer = [1, 2, 3];
    const correctCount = { strike: 0, ball: 3 };

    // 실행 및 평가
    ballCounts.forEach((player) => {
      expect(getBallCounts(computer, player)).toEqual(correctCount);
    });
  });

  test('결과값은 1스트라이크 2볼이다.', () => {
    // 조건
    const ballCounts = [
      [1, 3, 2],
      [3, 2, 1],
    ];
    const computer = [1, 2, 3];
    const correctCount = { strike: 1, ball: 2 };

    // 실행 및 평가
    ballCounts.forEach((player) => {
      expect(getBallCounts(computer, player)).toEqual(correctCount);
    });
  });

  test('결과값은 2스트라이크 0볼이다.', () => {
    // 조건
    const ballCounts = [
      [3, 2, 4],
      [3, 2, 1],
    ];
    const computer = [3, 2, 6];
    const correctCount = { strike: 2, ball: 0 };

    // 실행 및 평가
    ballCounts.forEach((player) => {
      expect(getBallCounts(computer, player)).toEqual(correctCount);
    });
  });
});
