const { checkCorrectNumber, checkCorrectCommand } = require('../src/Util/Validation');

describe('', () => {
  test.each([1, 'a', '오류지롱', '1234'])('적절하지 않은 숫자 입력 테스트', () => {
    expect((input) => {
      checkCorrectNumber(input);
    }).toThrow();
  });

  test.each([1, 'a', '오류지롱', '1234'])('적절하지 않은 종료/재시작 입력 테스트', () => {
    expect((input) => {
      checkCorrectCommand(input);
    }).toThrow();
  });
});
