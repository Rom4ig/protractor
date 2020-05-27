const Element = require('../element');

class RestorePage  {
  get restoreField() {
    return new Element('#field-email-login')
  }

  get checkButton() {
    return new Element('#recovery-check')
  }

  get errorMessage() {
    return new Element('#field-email-login-notice')
  }

  get emailRecoveryButton() {
    return new Element('#email_recovery')
  }

  get reservEmailField() {
    return new Element('#field-reservemail')
  }

  get errorFormatMail() {
    return new Element('#field-reservemail-notice')
  }

  get emailReservButton() {
    return new Element('#field-reservemail-button')
  }


}

module.exports = new RestorePage();