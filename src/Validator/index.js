const GameCommand = require('./GameCommand');
const GameNumber = require('./GameNumber');

const Validator = {
  checkGameNumbers(input) {
    GameNumber.checkGameNumbers(input);
  },

  checkGameCommand(input) {
    GameCommand.checkGameCommand(input);
  },
};

module.exports = Validator;
