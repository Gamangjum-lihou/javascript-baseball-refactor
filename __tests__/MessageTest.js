const { BASEBALL_TYPE } = require('../src/utils/constants/system');
const { getResultMessage } = require('../src/utils/services/message');

describe('결과값 반환 값 테스트', () => {
  test('ball과 strike가 0일 경우 낫싱을 반환한다.', () => {
    const score = {
      ball: 0,
      strike: 0,
    };

    const result = getResultMessage(score);

    expect(result).toEqual(BASEBALL_TYPE.nothing);
  });
  test('ball과 strike의 점수를 정확하게 반환한다.', () => {
    const score = {
      ball: 1,
      strike: 2,
    };

    const result = getResultMessage(score);

    expect(result).toEqual(`${score.ball}${BASEBALL_TYPE.ball} ${score.strike}${BASEBALL_TYPE.strike}`);
  });
});
