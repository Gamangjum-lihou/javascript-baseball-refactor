const BaseballController = require('./Controller/baseballController');
const BaseballModel = require('./Model/BaseballModel');
const View = require('./view');

class App {
  #view;

  #model;

  #baseballController;

  constructor() {
    this.#view = new View();
    this.#model = new BaseballModel();
    this.#baseballController = new BaseballController(this.#view, this.#model);
  }
  play() {
    this.#baseballController.start();
  }
}

const app = new App();

app.play();

module.exports = App;
