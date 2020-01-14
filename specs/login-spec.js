const StartPage = require('../Pages/startPage')
const logger = require('../logger').logger;
const Menu = require('../Pages/menuClass');

describe('Tut.by login', function () {
  beforeAll(async function () {
    logger.info('Start login test');
    browser.get(browser.baseUrl);
  });

  it('Should disabled button by login', async function () {
    await Menu.clickElement(Menu.LoginButton);
    text = await StartPage.getRandomText(5);
    await StartPage.enterTextToElement(StartPage.LoginField, text);
    expect((StartPage.EnterButton).isEnabled()).toBe(false);
  });

  it('Should disabled button by password', async function () {
    await StartPage.clearElemValue(StartPage.LoginField);
    text = await StartPage.getRandomText(5);
    await StartPage.enterTextToElement(StartPage.PasswordField, text);
    expect((StartPage.EnterButton).isEnabled()).toBe(false);
  });

  it('Should fail authorize', async function () {
    text = await StartPage.getRandomText(5);
    await StartPage.enterTextToElement(StartPage.LoginField, text);
    await StartPage.clickElement(StartPage.EnterButton);
    await Menu.clickElement(Menu.LoginButton);
    error = await StartPage.getElementText(StartPage.ErrorElem);
    expect(error).toEqual('Неверное имя пользователя или пароль');
  });

  it('Should success Authorize', async function () {
    await StartPage.enterTextToElement(StartPage.PasswordField, 'qwerty228');
    await StartPage.enterTextToElement(StartPage.LoginField, 'romses2000@mail.ru');
    await StartPage.clickElement(StartPage.EnterButton);
    name = await Menu.getElementText(Menu.Name);
    expect(name).toEqual('Роман Грунковский');
    await Menu.clickElement(Menu.LoginButton);
    await StartPage.clickElement(StartPage.ExitButton);
  });

  afterAll(async function () {
    logger.info('End login test');
  });

});