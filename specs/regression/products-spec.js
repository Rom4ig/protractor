const productsPage = require('../../Pages/productsPage');
const catalogPage = require('../../Pages/catalogPage');
const logger = require('../../logger').logger;
const menu = require('../../Pages/menuClass');

describe('Products test', () => {

  beforeAll(() => {
    logger.info('Start Products test');
  });

  it('The price of the previous is less than or equal to the price of the subsequent', () => {
    menu.navigate('Каталог цен');
    catalogPage.category('Ноутбуки').waitAndClick();
    productsPage.sort('Сначала дешевые').waitAndClick();
    productsPage.sort('Сначала дешевые').waitForElementVisible();
    let priceArray = productsPage.getPrice();
    logger.debug(priceArray);
    for (let i = 1; i < priceArray.length; i++) {
      expect(parseFloat((priceArray[i]).replace(',', '.'))).toBeGreaterThanOrEqual(parseFloat((priceArray[i - 1]).replace(',', '.')));
    }
  });

  it('The words "ASUS" and "DELL" are present in all search results', () => {
    productsPage.allManufacturer.waitAndClick();
    productsPage.manufacturer('ASUS').waitAndClick();
    productsPage.manufacturer('DELL').waitAndClick();
    productsPage.convertLink.waitAndClick();
    productsPage.submitButton.waitAndClick();
    productsPage.submitButton.waitForElementVisible();
    let laptopsArray = productsPage.laptopsArray.getTextOfArray();
    laptopsArray.splice(0, 1); //1-ый реклама
    let length = laptopsArray.length;
    for (let item of laptopsArray) {
      logger.debug(item);
      if (item.includes('ASUS') || item.includes('DELL'))
        length--;
    }
    expect(length).toEqual(0);
  });

  afterAll(() => {
    logger.info('End Products test');
  });

});