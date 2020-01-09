const ProductsPage = require('../Pages/productsPage');
const logger = require('../conf').logger;

describe('Products test', function () {

    beforeAll(async function () {
        logger.info('Start Products test');
        browser.waitForAngularEnabled(false);
        ProductsPage.open('https://www.tut.by/');
    });

    it('Sort check', async function () {
        await ProductsPage.click(ProductsPage.CatalogButton);
        await ProductsPage.clickByCategory('Ноутбуки');
        await ProductsPage.setSort('Сначала дешевые');
        let priceArray = await ProductsPage.getPrice();
        logger.debug(priceArray);
        for (let i = 1; i < priceArray.length; i++) {
            expect(parseFloat((priceArray[i]).replace(',', '.'))).toBeGreaterThanOrEqual(parseFloat((priceArray[i - 1]).replace(',', '.')));
        }
    });

    it('Laptops check', async function () {
        await ProductsPage.click(ProductsPage.AllManufacturer);
        await ProductsPage.setManufacturer('ASUS');
        await ProductsPage.setManufacturer('DELL');
        await ProductsPage.SubmitButton.submit();
        let laptopsArray = await ProductsPage.getMessage(ProductsPage.LaptopsArray);
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