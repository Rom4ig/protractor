const Element = require('../element');

class Menu  {
  get weatherElement() {
    return new Element('.weather');
  }

  get dollarElement() {
    return new Element('.sub-inf')
  }

  get loginButton() {
    return new Element('[data-target-popup="authorize-form"]')
  }

  get name(){
      return new Element('.uname');
  }

  elementByLinkText(text) {
    return new Element(`=${text}`);
  }

  navigate(text) {
    let elem = this.elementByLinkText(text);
    elem.waitAndClick();
  }
}

module.exports = new Menu();