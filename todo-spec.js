
const StartPage = require('./Pages/startPage')
const EC = protractor.ExpectedConditions;
beforeAll(async function () {
  await StartPage.clear();
  browser.waitForAngularEnabled(false);
  StartPage.open('https://www.tut.by/');
});

describe('Tut.by login', function () {

  it('Disabled button by login', async function () {
    await StartPage.click(StartPage.LoginButton);
    await StartPage.enterSomething(StartPage.LoginField);
    expect((StartPage.EnterButton).isEnabled()).toBe(false);
  });
  
    it('Disabled button by password', async function () {
    await StartPage.clearElem(StartPage.LoginField);
    await StartPage.enterSomething(StartPage.PasswordField);
    expect((StartPage.EnterButton).isEnabled()).toBe(false);
  });

    it('Fail Autorize', async function () {
    await StartPage.enterSomething(StartPage.LoginField);
    await StartPage.click(StartPage.EnterButton);
    await StartPage.click(StartPage.LoginButton);
    let error = await StartPage.getMessage(StartPage.ErrorElem);
    expect(error).toEqual('Неверное имя пользователя или пароль');
  });

  it('Success Autorize', async function () {
    await StartPage.enterSomething(StartPage.PasswordField, 'qwerty228');
    await StartPage.enterSomething(StartPage.LoginField, 'romses2000@mail.ru');
    await StartPage.click(StartPage.EnterButton);
    let name = await StartPage.getMessage(StartPage.Name);
    expect(name).toEqual('Роман Грунковский');

  });
});