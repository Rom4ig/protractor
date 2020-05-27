const Element = require('../element');

class StartPage  {
  get enterButton() {
    return new Element('[value="Войти"]')
  }

  get loginField() {
    return new Element('[name="login"]')
  }

  get errorElem() {
    return new Element('.error-msg')
  }

  get passwordField() {
    return new Element('[name="password"]')
  }

  get exitButton() {
    return new Element('=Выйти')
  }

  get forgotButton() {
    return new Element('=Забыли пароль?')
  }
}

module.exports = new StartPage();