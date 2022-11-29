const { Random } = require('@woowacourse/mission-utils');
const { makeRandomNumbers } = require('../src/model/utils/BaseBallNumberMaker');

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), Random.pickNumberInRange);
};

test('makeRandomNumbers가 제대로 작동하는지 확인. case1', () => {
  mockRandoms([1, 3, 5]);

  const result = makeRandomNumbers(3);

  expect(result).toEqual('135');
});

test('makeRandomNumbers가 제대로 작동하는지 확인. case2', () => {
  mockRandoms([1, 3, 5, 5]);

  const result = makeRandomNumbers(3);

  expect(result).toEqual('135');
});
