const startPage = require('../Pages/startPage')
const logger = require('../logger').logger;
const menu = require('../Pages/menuClass');

describe('Tut.by login', function () {
  beforeAll(async function () {
    logger.info('Start login test');
    browser.get(browser.baseUrl);
  });

  it('When entering only login, the login button should be disabled.', async function () {
    await menu.clickElement(menu.LoginButton);
    let text = await startPage.getRandomText(5);
    await startPage.enterTextToElement(startPage.LoginField, text);
    expect((startPage.EnterButton).isEnabled()).toBe(false);
  });

  it('When entering only password, the login button should be disabled.', async function () {
    await startPage.clearElemValue(startPage.LoginField);
    let text = await startPage.getRandomText(5);
    await startPage.enterTextToElement(startPage.PasswordField, text);
    expect((startPage.EnterButton).isEnabled()).toBe(false);
  });

  it('When set invalid credentials, should be error.', async function () {
    text = await startPage.getRandomText(5);
    await startPage.enterTextToElement(startPage.LoginField, text);
    await startPage.clickElement(startPage.EnterButton);
    await menu.clickElement(menu.LoginButton);
    let error = await startPage.getElementText(startPage.ErrorElem);
    expect(error).toEqual('Неверное имя пользователя или пароль');
  });

  it('When set valid credentials, should be success sign in.', async function () {
    await startPage.enterTextToElement(startPage.PasswordField, 'qwerty228');
    await startPage.enterTextToElement(startPage.LoginField, 'romses2000@mail.ru');
    await startPage.clickElement(startPage.EnterButton);
    let name = await menu.getElementText(menu.Name);
    expect(name).toEqual('Роман Грунковский');
    await menu.clickElement(menu.LoginButton);
    await startPage.clickElement(startPage.ExitButton);
  });

  afterAll(async function () {
    logger.info('End login test');
  });

});
