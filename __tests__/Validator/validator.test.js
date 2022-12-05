const Validator = require('../../src/Validator/index');

let validator;
beforeEach(() => {
  validator = new Validator();
});
describe('Validator 테스트', () => {
  describe('checkGameNumbers ', () => {
    it('정상적으로 서로 다른 3자리 숫자를 입력하였을 경우 ', () => {
      ['123', '821', '781', '531'].forEach((element) => {
        expect(validator.checkGameNumbers(element)).toBeUndefined();
      });
    });
    it('[Error] 중복되는 숫자를 입력할 경우 에러 처리', () => {
      ['122', '633', '787', '911'].forEach((element) => {
        expect(() => validator.checkGameNumbers(element)).toThrow();
      });
    });

    it('[Error] 0을 포함할 경우 에러 처리', () => {
      ['012', '103', '340'].forEach((element) => {
        expect(() => validator.checkGameNumbers(element)).toThrow();
      });
    });

    it('[Error] 3자리 숫자가 아닐 경우 에러 처리 ', () => {
      ['12', '1', '', '1234', '2390432332849023849032', '-233'].forEach((element) => {
        expect(() => validator.checkGameNumbers(element)).toThrow();
      });
    });

    it('[Error] 숫자이외의 문자가 포함되어있을 경우 에러 처리', () => {
      ['안타니?', 'SSG우승축하', '', '34오', '+234', '오72'].forEach((element) => {
        expect(() => validator.checkGameNumbers(element)).toThrow();
      });
    });
  });

  describe('checkGameCommand', () => {
    it('정상적인 숫자 1 또는 2를 입력하였을 경우 통과', () => {
      ['1', '2'].forEach((element) => {
        expect(validator.checkGameCommand(element)).toBeUndefined();
      });
    });

    it('[Error] 숫자이외의 문자가 포함되었을 경우 에러 처리', () => {
      ['이', '일', '', '오1', '+2', '-1'].forEach((element) => {
        expect(() => validator.checkGameCommand(element)).toThrow();
      });
    });

    it('[Error] 1자리 숫자가 아닐 경우 에러 처리', () => {
      ['11', '12', '21', '22', '32', '0', '', '-1', '-2'].forEach((element) => {
        expect(() => validator.checkGameCommand(element)).toThrow();
      });
    });

    it('[Error] 숫자 1 또는 2가 아닌 경우 에러 처리', () => {
      ['3', '0', '9', '42', '32', '0', '', '-1', '-2'].forEach((element) => {
        expect(() => validator.checkGameCommand(element)).toThrow();
      });
    });
  });
});
