const RestorePage = require('../Pages/restorePage');
const StartPage = require('../Pages/startPage')
const logger = require('../logger').logger;
const Menu = require('../Pages/menuClass');

describe('Restore test', function () {

    beforeAll(async function () {
        logger.info('Start restore test');
        browser.get(browser.baseUrl);
    });

    it('Should be nonexistent mail', async function () {
        await Menu.clickElement(Menu.LoginButton);
        await StartPage.clickElement(StartPage.ForgotButton);
        await RestorePage.enterTextToElement(RestorePage.RestoreField, 'iTechArtQA@tut.by');
        await RestorePage.clickElement(RestorePage.CheckButton);
        error = await RestorePage.getElementText(RestorePage.ErrorMessage);
        expect(error).toEqual('Такой почты не существует');
    });

    it('Should be unvalid mail', async function () {
        await RestorePage.clearElemValue(RestorePage.RestoreField);
        await RestorePage.enterTextToElement(RestorePage.RestoreField, 'romses2000@mail.ru');
        await RestorePage.clickElement(RestorePage.CheckButton);
        await RestorePage.clickElement(RestorePage.EmailRecoveryButton);
        mail = RestorePage.getRandomText(5);
        await RestorePage.enterTextToElement(RestorePage.ReservEmailField, mail);
        await RestorePage.clickElement(RestorePage.EmailReservButton);
        error = await RestorePage.getElementText(RestorePage.ErrorFormatMail);
        expect(error).toEqual('Минимум 6 символов для поля Резервный адрес эл. почты');
    });

    it('Should be nonexistent mail on restore page', async function () {
        await RestorePage.clearElemValue(RestorePage.ReservEmailField);
        await RestorePage.enterTextToElement(RestorePage.ReservEmailField, 'qwer@mail.ru');
        await RestorePage.clickElement(RestorePage.EmailReservButton);
        error = await RestorePage.getElementText(RestorePage.ErrorFormatMail);
        expect(error).toEqual('Неверный адрес почты');
    });

    afterAll(async function () {
        logger.info('End restore test');
    });
})