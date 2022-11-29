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

const app = new App();
app.play();

module.exports = App;
