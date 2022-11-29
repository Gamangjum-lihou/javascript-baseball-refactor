const BallCount = require('../src/model/utils/BallCount');

test('BallCount가 제대로 작동하는지 확인. case1', () => {
  const ballCount = new BallCount('123', '123');

  const result = ballCount.getCount();

  expect(result).toEqual({ strike: 3, ball: 0 });
});

test('BallCount가 제대로 작동하는지 확인. case2', () => {
  const ballCount = new BallCount('123', '321');

  const result = ballCount.getCount();

  expect(result).toEqual({ strike: 1, ball: 2 });
});
