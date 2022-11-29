const { input } = require('./view/InputView');
const { print } = require('./view/OutputView');

const Messages = require('./utils/Messages');

const handleError = (occuredError) => {
  try {
    throw new Error(occuredError);
  } catch (occuredError) {
    printErrorLog(occuredError);
    return false;
  }
};

class GameController {
  start() {
    print(Messages.GAME_START);
    this.#getNumber();
  }

  #getNumber() {
    input(Messages.INPUT_NUMBERS, (numbers) => {
      try {
        console.log(numbers);
      } catch (error) {
        printErrorLog(occuredError);
      }
    });
  }
}

module.exports = GameController;
