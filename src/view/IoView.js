const { Console } = require('@woowacourse/mission-utils');

const IoView = {
	readNumber(callback) {
		Console.readLine('숫자를 입력해주세요 : ', callback);
	},
	readRetry(callback) {
		Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', callback);
	},
	printStart() {
		Console.print('숫자 야구 게임을 시작합니다.');
	},
	printCount(ball, strike) {
		Console.print(ball, strike);
	},
	printFinish() {
		Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
	},
};

module.exports = IoView;
