const Validator = require('../src/validator/Validator');

describe('입력값 유효성 검사', () => {
  test.each([['r'], [' 2qs'], [' '], ['      '], ['123123']])(
    '숫자 야구 입력값이 길이가 3이 아닌지 확인한다.',
    testString => {
      expect(Validator.isFitLength(testString)).toBeFalsy();
    }
  );

  test.each([['123'], ['2qs'], ['!!!']])('숫자 야구 입력값이 길이가 3인지 확인한다.', testString => {
    expect(Validator.isFitLength(testString)).toBeTruthy();
  });

  test.each([['r ㅁ'], [' 2 '], ['2!2'], ['210'], ['-24']])('숫자 야구 입력값 숫자가 아닌지 확인한다.', testString => {
    expect(Validator.isNumber(testString)).toBeFalsy();
  });

  test.each([['123'], ['121'], ['129']])('숫자 야구 입력값 숫자인지 확인한다.', testString => {
    expect(Validator.isNumber(testString)).toBeTruthy();
  });

  test.each([['222'], ['121'], ['119']])('숫자 야구 입력값 중 중복된 숫자가 있는지 확인한다.', testString => {
    expect(Validator.isNumber(testString)).toBeTruthy();
  });

  test.each([['11'], [' 2 '], ['2!'], ['   1'], ['-1']])('숫자 야구 입력값 숫자가 아닌지 확인한다.', testString => {
    expect(Validator.isValidCommand(testString)).toBeTruthy();
  });
});
