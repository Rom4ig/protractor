const ProductsPage = require('../Pages/productsPage');
const CatalogPage = require('../Pages/catalogPage');
const logger = require('../logger').logger;
const Menu = require('../Pages/menuClass');

describe('Products test', function () {

    beforeAll(async function () {
        logger.info('Start Products test');
        browser.get(browser.baseUrl);
    });

    it('Must be correct sorting', async function () {
        await Menu.navigate('Каталог цен');
        await CatalogPage.clickByCategory('Ноутбуки');
        await ProductsPage.setSort('Сначала дешевые');
        priceArray = await ProductsPage.getPrice();
        logger.debug(priceArray);
        for (i = 1; i < priceArray.length; i++) {
            expect(parseFloat((priceArray[i]).replace(',', '.'))).toBeGreaterThanOrEqual(parseFloat((priceArray[i - 1]).replace(',', '.')));
        }
    });

    it('The words are present in all search results', async function () {
        await ProductsPage.clickElement(ProductsPage.AllManufacturer);
        await ProductsPage.setManufacturer('ASUS');
        await ProductsPage.setManufacturer('DELL');
        await ProductsPage.SubmitButton.submit();
        laptopsArray = await ProductsPage.getElementText(ProductsPage.LaptopsArray);
        laptopsArray.splice(0, 1); //1-ый реклама
        length = laptopsArray.length;
        for (item of laptopsArray) {
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