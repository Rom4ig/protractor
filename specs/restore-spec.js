const restorePage = require('../Pages/restorePage');
const startPage = require('../Pages/startPage')
const logger = require('../logger').logger;
const menu = require('../Pages/menuClass');

describe('Restore test', function () {

    beforeAll(async function () {
        logger.info('Start restore test');
        browser.get(browser.baseUrl);
    });

    it('After entering non-existent mail there should be an error', async function () {
        await menu.clickElement(menu.LoginButton);
        await startPage.clickElement(startPage.ForgotButton);
        await restorePage.enterTextToElement(restorePage.RestoreField, 'iTechArtQA@tut.by');
        await restorePage.clickElement(restorePage.CheckButton);
        let error = await restorePage.getElementText(restorePage.ErrorMessage);
        expect(error).toEqual('Такой почты не существует');
    });

    it('After entering invalid mail there should be an error', async function () {
        await restorePage.clearElemValue(restorePage.RestoreField);
        await restorePage.enterTextToElement(restorePage.RestoreField, 'romses2000@mail.ru');
        await restorePage.clickElement(restorePage.CheckButton);
        await restorePage.clickElement(restorePage.EmailRecoveryButton);
        let mail = restorePage.getRandomText(5);
        await restorePage.enterTextToElement(restorePage.ReservEmailField, mail);
        await restorePage.clickElement(restorePage.EmailReservButton);
        let error = await restorePage.getElementText(restorePage.ErrorFormatMail);
        expect(error).toEqual('Минимум 6 символов для поля Резервный адрес эл. почты');
    });

    it('After entering non-existent to restore field mail there should be an error.', async function () {
        await restorePage.clearElemValue(restorePage.ReservEmailField);
        await restorePage.enterTextToElement(restorePage.ReservEmailField, 'qwer@mail.ru');
        await restorePage.clickElement(restorePage.EmailReservButton);
        let error = await restorePage.getElementText(restorePage.ErrorFormatMail);
        expect(error).toEqual('Неверный адрес почты');
    });

    afterAll(async function () {
        logger.info('End restore test');
    });
})