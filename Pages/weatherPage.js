const Element = require('../element');

class WeatherPage  {
  get weatherPageElement() {
    return new Element('.temp-i');
  }

  get townSelector() {
    return new Element('.dotted');
  }

  town(town) {
      return new Element(`=${town}`);
  }
}

module.exports = new WeatherPage();