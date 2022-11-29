const InputValidation = {
  checkNumber(input) {
    const RegExp = /^[0-9]+$/g;
    if (!RegExp.test(input)) {
      throw new Error('숫자만 입력 가능합니다.');
    }
  },
  checkLength(input) {
    if (input.length !== 3) {
      throw new Error('길이가 3이 아닙니다.');
    }
  },
  checkDuplicate(input) {
    const inputSet = new Set([...input]);
    if (inputSet.size !== input.length) {
      throw new Error('중복된 값이 있습니다.');
    }
  },
};

module.exports = InputValidation;
