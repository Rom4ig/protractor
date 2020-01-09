const RestorePage = require('../Pages/restorePage');
const logger = require('../conf').logger;

describe('Restore test', function () {

    beforeAll(async function () {
        logger.info('Start restore test');
        browser.waitForAngularEnabled(false);
        RestorePage.open('https://www.tut.by/');
    });

    it('Nonexistent mail', async function () {
        await RestorePage.click(RestorePage.LoginButton);
        await RestorePage.click(RestorePage.ForgotButton);
        await RestorePage.enterSomething(RestorePage.RestoreField, 'iTechArtQA@tut.by');
        await RestorePage.click(RestorePage.CheckButton);
        let error = await RestorePage.getMessage(RestorePage.ErrorMessage);
        expect(error).toEqual('Такой почты не существует');
    });

    it('Invalid mail', async function () {
        await RestorePage.clearElem(RestorePage.RestoreField);
        await RestorePage.enterSomething(RestorePage.RestoreField, 'romses2000@mail.ru');
        await RestorePage.click(RestorePage.CheckButton);
        await RestorePage.click(RestorePage.EmailRecoveryButton);
        await RestorePage.enterSomething(RestorePage.ReservEmailField, "", 5);
        await RestorePage.click(RestorePage.EmailReservButton);
        let error = await RestorePage.getMessage(RestorePage.ErrorFormatMail);
        expect(error).toEqual('Минимум 6 символов для поля Резервный адрес эл. почты');
    });

    it('Nonexistent mail', async function () {
        await RestorePage.clearElem(RestorePage.ReservEmailField);
        await RestorePage.enterSomething(RestorePage.ReservEmailField, 'qwer@mail.ru');
        await RestorePage.click(RestorePage.EmailReservButton);
        let error = await RestorePage.getMessage(RestorePage.ErrorFormatMail);
        expect(error).toEqual('Неверный адрес почты');
    });

    afterAll(async function () {
        logger.info('End restore test');
    });
})