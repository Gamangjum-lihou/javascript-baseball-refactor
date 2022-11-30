const {
  checkNumber,
  checkLength,
  checkDuplicate,
  checkOneOrTwo,
} = require('../src/InputValidation');

test.each(['12a', 'aaa', '32a'])('checkNumber가 제대로 작동하는지 확인. case1', (input) => {
  expect(() => checkNumber(input)).toThrow();
});

test.each(['1234', '12', '1'])('checkLength가 제대로 작동하는지 확인. case1', (input) => {
  expect(() => checkLength(input)).toThrow();
});

test.each(['122', '111', '888'])('checkDuplicate가 제대로 작동하는지 확인. case1', (input) => {
  expect(() => checkDuplicate(input)).toThrow();
});

test.each(['0', '-1', '3'])('checkOneOrTwo가 제대로 작동하는지 확인. case1', (input) => {
  expect(() => checkOneOrTwo(input)).toThrow();
});
