const dollarPage = require('../Pages/dollarPage');
const dollarArchivePage = require('../Pages/dollarArchivePage');
const logger = require('../logger').logger;
const menu = require('../Pages/menuClass');

describe('Dollar test', function () {
    let dollar;
    beforeAll(async function () {
        logger.info('Start dollar test');
        browser.get(browser.baseUrl);
    });

    it('The number of chars after the point should be 4.', async function () {
        dollar = await dollarPage.getElementText(menu.DollarElement);
        logger.debug(dollar);
        expect(dollar).toContain('$');
        let count = dollar.split('.').pop().length;
        expect(count).toEqual(4);
    });

    it('Dollar menu element must be equal with dollar page element', async function () {
        await menu.navigate('Финансы');
        let  dollarNBRB = await dollarPage.getElementText(await dollarPage.elementByValueAndCurrency('нацбанк', '1 USD'));
        logger.debug(dollarNBRB);
        dollarNBRB = '$' + dollarNBRB;
        expect(dollar.slice(1)).toEqual(dollarNBRB);
    });

    it('Buy dollar value must be greater than sell dollar value', async function () {
        let dollarBuy = await dollarPage.getElementText(await dollarPage.elementByValueAndCurrency('купить', '1 USD'));
        let dollarSell = await dollarPage.getElementText(await dollarPage.elementByValueAndCurrency('продать', '1 USD'));
        expect(dollarBuy).toBeGreaterThan(dollarSell);
    });

    it('Checking the dollar archive for the date of December 1, 2019. The value of the dollar must be equal to 2.1086 value', async function () {
        await dollarPage.clickElement(await dollarPage.elementByValueAndCurrency('нацбанк', '1 USD'));
        let  startDate = new Date('December 1, 2019');
        let endDate = new Date();
        await dollarArchivePage.setDate(startDate, endDate);
        let dollarNBRBArchive = await dollarArchivePage.getElementText(await dollarArchivePage.elementByBankAndDate('Курс НБРБ', '01.12.2019'));
        expect(parseFloat(dollarNBRBArchive)).toEqual(2.1086);
    });

    afterAll(async function () {
        logger.info('End dollar test');
    });

})
