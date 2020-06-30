const dollarPage = require('../../Pages/dollarPage');
const dollarArchivePage = require('../../Pages/dollarArchivePage');
const logger = require('../../logger').logger;
const menu = require('../../Pages/menuClass');


describe('Dollar test', () => {
  let dollar;
  beforeAll(() => {
    logger.info(`Start Dollar test`);
  });

  it('The number of chars after the point should be 4.', () => {
    dollar = menu.dollarElement.getText();
    logger.debug(dollar);
    expect(dollar).toContain('$');
    let count = dollar.split('.').pop().length;
    expect(count).toEqual(4);
  });

  it('Dollar menu element must be equal with dollar page element', () => {
    menu.navigate('Финансы');
    let dollarNBRB = dollarPage.elementByValueAndCurrency('нацбанк', '1 USD').getText();
    logger.debug(dollarNBRB);
    dollarNBRB = '$' + dollarNBRB;
    expect(dollar.slice(1)).toEqual(dollarNBRB);
  });

  it('Buy dollar value must be greater than sell dollar value', () => {
    let dollarBuy = dollarPage.elementByValueAndCurrency('купить', '1 USD').getText();
    let dollarSell = dollarPage.elementByValueAndCurrency('продать', '1 USD').getText();
    expect(dollarBuy).toBeGreaterThan(dollarSell);
  });

  it('Checking the dollar archive for the date of December 1, 2019. The value of the dollar must be equal to 2.1086 value', () => {
    dollarPage.elementByValueAndCurrency('нацбанк', '1 USD').waitAndClick();
    let startDate = new Date('December 1, 2019');
    let endDate = new Date();
    dollarArchivePage.setDate(startDate, endDate);
    let dollarNBRBArchive = dollarArchivePage.elementByBankAndDate('Курс НБРБ', '01.12.2019').getText();
    expect(parseFloat(dollarNBRBArchive)).toEqual(2.1086);
  });

  afterAll(() => {
    logger.info('End dollar test');
  });

});
