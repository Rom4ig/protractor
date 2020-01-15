const weatherPage = require('../Pages/weatherPage');
const logger = require('../logger').logger;
const menu = require('../Pages/menuClass');

describe('Weather test', function () {
    beforeAll(async function () {
        logger.info('Start weather test');
        browser.get(browser.baseUrl);
    });

    it('Menu weather element must be equal with page weather element', async function () {
        let weather = await menu.getElementText(menu.WeatherElement);
        let regex = /((\+[1-9]{1,2}|\-[1-9]{1,2}|0)°)/;
        await menu.clickElement(menu.WeatherElement);
        let weatherpage = await weatherPage.getElementText(weatherPage.WeatherPageElement);
        weatherpage = weatherpage.match(regex)[1];
        expect(weatherpage).toEqual(weather);
    });

    it('Town after selecting on the weather page - "Лепеле"', async function () {
        await weatherPage.clickElement(weatherPage.TownElement);
        let town = 'Лепель';
        await weatherPage.selectTown(town)
        let currentTown = await weatherPage.getElementText(weatherPage.TownElement);
        expect(currentTown).toEqual('Лепеле');
    });

    afterAll(async function () {
        logger.info('End weather test');
    });

})