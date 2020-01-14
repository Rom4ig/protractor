const WeatherPage = require('../Pages/weatherPage');
const logger = require('../logger').logger;
const Menu = require('../Pages/menuClass');

describe('Weather test', function () {
    beforeAll(async function () {
        logger.info('Start weather test');
        browser.get(browser.baseUrl);
    });

    it('Weather equal check. Menu element and page element', async function () {
        weather = await Menu.getElementText(Menu.WeatherElement);
        regex = /((\+[1-9]{1,2}|\-[1-9]{1,2}|0)°)/;
        await Menu.clickElement(Menu.WeatherElement);
        weatherpage = await WeatherPage.getElementText(WeatherPage.WeatherPageElement);
        weatherpage = weatherpage.match(regex)[1];
        expect(weather).toEqual(weatherpage);
    });

    it('Select other town.', async function () {
        await WeatherPage.clickElement(WeatherPage.TownElement);
        town = 'Лепель';
        await WeatherPage.selectTown(town)
        currentTown = await WeatherPage.getElementText(WeatherPage.TownElement);
        expect(town.substring(0, town.length - 2)).toEqual(currentTown.substring(0, currentTown.length - 2));
        //меняется окончание
    });

    afterAll(async function () {
        logger.info('End weather test');
    });

})