const Chance = require('chance');
const startPage = require('../../Pages/startPage');
const logger = require('../../logger').logger;
const menu = require('../../Pages/menuClass');

const chance = new Chance();

describe('Tut.by login', () => {
  let text = chance.word({length: 5});

  beforeAll(() => {
    logger.info('Start login test');
  });

  it('When entering only login, the login button should be disabled.', () => {
    menu.loginButton.waitAndClick();
    startPage.loginField.setValue(text);
    expect(startPage.enterButton.isEnabled()).toBe(false );
  });

  it('When entering only password, the login button should be disabled.', () => {
    startPage.loginField.setValue('');
    startPage.passwordField.setValue(text);
    expect(startPage.enterButton.isEnabled()).toBe(false);
  });

  it('When set invalid credentials, should be error.', () => {
    startPage.loginField.setValue(text);
    startPage.enterButton.waitAndClick();
    //menu.LoginButton.waitAndClick();
    let error = startPage.errorElem.getText();
    expect(error).toEqual('Неверное имя пользователя или пароль');
  });

  it('When set valid credentials, should be success sign in.', () => {
    const login = process.env.LOGIN || 'romses2000@mail.ru';
    const password = process.env.PASSWORD || 'qwerty228';
    const user = process.env.USER ||'Роман Грунковский';
    startPage.passwordField.setValue(password);
    startPage.loginField.setValue(login);
    startPage.enterButton.waitAndClick();
    let name = menu.name.getText();
    expect(name).toEqual(user);
    menu.loginButton.waitAndClick();
    startPage.exitButton.waitAndClick();
  });

  afterAll(() => {
    logger.info('End login test');
  });

});
