const { Random } = require('@woowacourse/mission-utils');
const Computer = require('../src/Model/Computer');

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe('Computer Model test', () => {
  test('컴퓨터 모델에서 번호가 정상적으로 생성되는지 검증', () => {
    // 조건
    const randoms = [1, 3, 5];

    // 실행
    mockRandoms(randoms);
    const computer = new Computer();

    // 평가
    expect(randoms).toEqual(computer.getNumber());
  });
});
