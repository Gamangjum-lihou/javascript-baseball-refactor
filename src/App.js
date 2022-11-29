const GameController = require('./GameController');
const Computer = require('./domain/Computer');

class App {
  constructor() {
    this.computer = new Computer();
  }

  play() {
    const controller = new GameController(this.computer);
    controller.start();
  }
}

module.exports = App;
