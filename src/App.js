const Controller = require('./Controller');
const View = require('./View');
const Model = require('./Model');

class App {
  play() {
    const view = new View();
    const model = new Model();
    this.controller = new Controller(model, view);
    this.controller.start();
  }
}

module.exports = App;
