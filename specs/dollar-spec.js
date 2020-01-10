const DollarPage = require('../Pages/dollarPage');
const logger = require('../conf').logger;

describe('Dollar test', function () {
    let dollar;
    beforeAll(async function () {
        await DollarPage.clear();
        logger.info('Start dollar test');
        DollarPage.open('https://www.tut.by/');
    });

    it('Dollar check', async function () {
        dollar = await DollarPage.getMessage(DollarPage.DollarElement);
        logger.debug(dollar);
        expect(dollar).toContain('$');
        let count = dollar.split('.').pop().length;
        expect(count).toEqual(4);
    });

    it('Check dollar', async function () {
        await DollarPage.click(DollarPage.FinansButton);
        let dollarNBRB = await DollarPage.getMessage(await DollarPage.elementByValueAndCurrency('нацбанк', '1 USD'));
        logger.debug(dollarNBRB);
        dollarNBRB = '$' + dollarNBRB;
        expect(dollarNBRB).toEqual(dollar);
    });

    it('Buy and sell', async function () {
        dollarBuy = await DollarPage.getMessage(await DollarPage.elementByValueAndCurrency('купить', '1 USD'));
        dollarSell = await DollarPage.getMessage(await DollarPage.elementByValueAndCurrency('продать', '1 USD'));
        expect(dollarBuy).toBeGreaterThan(dollarSell);
    });

    it('Archive test', async function () {
        await DollarPage.click(await DollarPage.elementByValueAndCurrency('нацбанк', '1 USD'));
        await DollarPage.startDate(1,12,2019);
        let dollarNBRBArchive = await DollarPage.getMessage(await DollarPage.elementByBankAndDate('Курс НБРБ', '01.12.2019'));
        expect(parseFloat(dollarNBRBArchive)).toEqual(2.1086);
    });

    afterAll(async function () {
        logger.info('End dollar test');
    });

})