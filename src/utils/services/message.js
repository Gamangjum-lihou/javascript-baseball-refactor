const { BASEBALL_TYPE } = require('../constants/system');

// getPrintMessage라는 함수를 쪼개서 만들어줍니다.
const getPrintMessage = (number, message) => {
  if (number === 0) return '';
  return `${number}${message}`;
};

const getResultMessage = ({ ball, strike }) => {
  const ballMessage = getPrintMessage(ball, BASEBALL_TYPE.ball);
  const strikeMessage = getPrintMessage(strike, BASEBALL_TYPE.strike);
  const result = `${ballMessage} ${strikeMessage}`.trim();
  return result === '' ? BASEBALL_TYPE.nothing : result;
};

module.exports = {
  getResultMessage,
};
