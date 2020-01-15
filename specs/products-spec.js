const productsPage = require('../Pages/productsPage');
const catalogPage = require('../Pages/catalogPage');
const logger = require('../logger').logger;
const menu = require('../Pages/menuClass');

describe('Products test', function () {

    beforeAll(async function () {
        logger.info('Start Products test');
        browser.get(browser.baseUrl);
    });

    it('The price of the previous is less than or equal to the price of the subsequent', async function () {
        await menu.navigate('Каталог цен');
        await catalogPage.clickByCategory('Ноутбуки');
        await productsPage.setSort('Сначала дешевые');
        let priceArray = await productsPage.getPrice();
        logger.debug(priceArray);
        for (let i = 1; i < priceArray.length; i++) {
            expect(parseFloat((priceArray[i]).replace(',', '.'))).toBeGreaterThanOrEqual(parseFloat((priceArray[i - 1]).replace(',', '.')));
        }
    });

    it('The words "ASUS" and "DELL" are present in all search results', async function () {
        await productsPage.clickElement(productsPage.AllManufacturer);
        await productsPage.setManufacturer('ASUS');
        await productsPage.setManufacturer('DELL');
        await productsPage.SubmitButton.submit();
        let laptopsArray = await productsPage.getElementText(productsPage.LaptopsArray);
        laptopsArray.splice(0, 1); //1-ый реклама
        let length = laptopsArray.length;
        for (let item of laptopsArray) {
            logger.debug(item);
            if (item.includes('ASUS') || item.includes('DELL'))
                length--;
        }
        expect(length).toEqual(0);
    });

    afterAll(async function () {
        logger.info('End Products test');
    });

})