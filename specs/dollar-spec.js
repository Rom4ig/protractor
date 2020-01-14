const DollarPage = require('../Pages/dollarPage');
const DollarArchivePage = require('../Pages/dollarArchivePage');
const logger = require('../logger').logger;
const Menu = require('../Pages/menuClass');

describe('Dollar test', function () {
    let dollar;
    beforeAll(async function () {
        logger.info('Start dollar test');
        browser.get(browser.baseUrl);
    });

    it('Count of symbols after point.', async function () {
        dollar = await DollarPage.getElementText(Menu.DollarElement);
        logger.debug(dollar);
        expect(dollar).toContain('$');
        count = dollar.split('.').pop().length;
        expect(count).toEqual(4);
    });

    it('Check dollar equal.  Menu element and page element', async function () {
        await Menu.navigate('Финансы');
        dollarNBRB = await DollarPage.getElementText(await DollarPage.elementByValueAndCurrency('нацбанк', '1 USD'));
        logger.debug(dollarNBRB);
        dollarNBRB = '$' + dollarNBRB;
        expect(dollarNBRB).toEqual(dollar.slice(1));
    });

    it('Buy must be greater than sell', async function () {
        dollarBuy = await DollarPage.getElementText(await DollarPage.elementByValueAndCurrency('купить', '1 USD'));
        dollarSell = await DollarPage.getElementText(await DollarPage.elementByValueAndCurrency('продать', '1 USD'));
        expect(dollarBuy).toBeGreaterThan(dollarSell);
    });

    it('Arhive dollar check. The value of the dollar must be equal to some value', async function () {
        await DollarPage.clickElement(await DollarPage.elementByValueAndCurrency('нацбанк', '1 USD'));
        startDate = new Date('December 1, 2019');
        endDate = new Date();
        await DollarArchivePage.setDate(startDate, endDate);
        dollarNBRBArchive = await DollarArchivePage.getElementText(await DollarArchivePage.elementByBankAndDate('Курс НБРБ', '01.12.2019'));
        expect(parseFloat(dollarNBRBArchive)).toEqual(2.1086);
    });

    afterAll(async function () {
        logger.info('End dollar test');
    });

})
