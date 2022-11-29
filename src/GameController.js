const { input } = require('./view/InputView');
const { print } = require('./view/OutputView');

const Messages = require('./utils/Messages');
const Computer = require('./domain/Computer');

class GameController {
  #computer;

  constructor() {
    this.#computer = new Computer();
  }

  start() {
    print(Messages.GAME_START);
    this.#computer.generateNumber();
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
