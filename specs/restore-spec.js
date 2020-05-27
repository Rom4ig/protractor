const Chance = require('chance');
const restorePage = require('../Pages/restorePage');
const startPage = require('../Pages/startPage');
const logger = require('../logger').logger;
const menu = require('../Pages/menuClass');

const chance = new Chance();

describe('Restore test', () => {

  beforeAll(() => {
    logger.info('Start restore test');
  });

  it('After entering non-existent mail there should be an error', () => {
    menu.loginButton.waitAndClick();
    startPage.forgotButton.waitAndClick();
    restorePage.restoreField.setValue('iTechArtQA@tut.by');
    restorePage.checkButton.waitAndClick();
    let error = restorePage.errorMessage.getText();
    expect(error).toEqual('Такой почты не существует');
  });

  it('After entering invalid mail there should be an error', () => {
    restorePage.restoreField.setValue('');
   restorePage.restoreField.setValue('romses2000@mail.ru');
    restorePage.checkButton.waitAndClick();
    restorePage.emailRecoveryButton.waitAndClick();
    let mail = chance.word({length:5});
    restorePage.reservEmailField.setValue(mail);
    restorePage.emailReservButton.waitAndClick();
    let error = restorePage.errorFormatMail.getText();
    expect(error).toEqual('Минимум 6 символов для поля Резервный адрес эл. почты');
  });

  it('After entering non-existent to restore field mail there should be an error.', () => {
    restorePage.reservEmailField.setValue('');
    restorePage.reservEmailField.setValue('qwer@mail.ru');
    restorePage.emailReservButton.waitAndClick();
    let error = restorePage.errorFormatMail.getText();
    expect(error).toEqual('Неверный адрес почты');
  });

  afterAll(() => {
    logger.info('End restore test');
  });
});