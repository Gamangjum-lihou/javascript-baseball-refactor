const App = require('../src/App');
const { mockRandoms, mockQuestions } = require('./ApplicationTest');

describe('유저 숫자 농구게임 입력값 유효성 검사', () => {
  test('공백 입력 시 예외를 발생시킨다.', () => {
    const randoms = [1, 3, 5];
    const answers = [' '];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
  test('0이 포함된 3가지 숫자를 입력 시 예외를 발생시킨다.', () => {
    const randoms = [1, 3, 5];
    const answers = ['012'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
  test('숫자 외의 문자를 입력 시 예외를 발생시킨다.', () => {
    const randoms = [1, 3, 5];
    const answers = ['영12'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
  test('범위에 맞지 않은 숫자를 입력 시 예외를 발생시킨다.', () => {
    const randoms = [1, 3, 5];
    const answers = ['10011'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
  test('3가지 숫자를 입력하지 않았을 경우 예외를 발생시킨다. (1)', () => {
    const randoms = [1, 3, 5];
    const answers = ['12'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
  test('3가지 숫자를 입력하지 않았을 경우 예외를 발생시킨다. (2)', () => {
    const randoms = [1, 3, 5];
    const answers = ['1234'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});

describe('다시시작/종료 입력값 유효성 검사', () => {
  test('정해진 값을 입력하지 않을 경우 예외를 발생시킨다. (1)', () => {
    const randoms = [1, 3, 5];
    const answers = ['135', 'Q'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
  test('정해진 값을 입력하지 않을 경우 예외를 발생시킨다. (2)', () => {
    const randoms = [1, 3, 5];
    const answers = ['135', 'R'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
  test('정해진 값을 입력하지 않을 경우 예외를 발생시킨다. (3)', () => {
    const randoms = [1, 3, 5];
    const answers = ['135', '3'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
