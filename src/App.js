const Presenter = require('./presenter/Presenter');

class App {
  #presenter;

  play() {
    this.#presenter = new Presenter();
    this.#presenter.run();
  }
}

module.exports = App;

const app = new App();
app.play();
