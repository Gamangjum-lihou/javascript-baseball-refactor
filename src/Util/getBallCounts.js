function getBallCounts(computer, player) {
  const computerSet = new Set(computer);
  let strike = 0;
  let ball = 0;
  player.forEach((number, index) => {
    if (number === computer[index]) strike += 1;
    if (computerSet.has(number)) ball += 1;
  });
  return { strike, ball: ball - strike };
}

module.exports = getBallCounts;
