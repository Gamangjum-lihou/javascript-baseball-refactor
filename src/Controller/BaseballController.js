const { printStart, printStatus, printClear } = require('../View/OutputView');
const { readPlayerCommand, readRetryCommand, exit } = require('../View/InputView');
const { isClear } = require('../Util/checkGameOption');
const getBallCounts = require('../Util/getBallCounts');
const Computer = require('../Model/Computer');
const Player = require('../Model/Player');

class BaseBallController {
  #computer;

  #player;

  constructor() {
    this.#player = new Player();
  }

  start = () => {
    printStart();
    this.#computer = new Computer();
    this.getPlayerCommand();
  };

  getPlayerCommand = () => {
    readPlayerCommand(this.sendPlayerCommand);
  };

  sendPlayerCommand = (input) => {
    this.#player.storeNumber(input.split('').map(Number));
    this.compare();
  };

  compare = () => {
    const computer = this.#computer.getNumber();
    const player = this.#player.getNumber();
    this.#player.storeBallCounts(getBallCounts(computer, player));
    this.print();
  };

  print = () => {
    printStatus(this.#player.getBallCounts());
    this.gameOption();
  };

  gameOption = () => {
    const { strike } = this.#player.getBallCounts();
    if (isClear(strike)) {
      printClear();
      this.getRetryCommand();
    }
    if (!isClear(strike)) this.getPlayerCommand();
  };

  getRetryCommand = () => {
    readRetryCommand(this.retry);
  };

  retry = (input) => {
    if (input === '1') this.start();
    if (input === '2') exit();
  };
}

module.exports = BaseBallController;
