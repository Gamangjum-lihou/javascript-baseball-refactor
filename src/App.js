const BaseballController = require('./Controller/BaseballController');

class App {
  play() {
    const game = new BaseballController();
    game.start();
  }
}

const app = new App();
app.play();
module.exports = App;
