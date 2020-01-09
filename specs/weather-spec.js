const WeatherPage = require('../Pages/weatherPage');
const logger = require('../conf').logger;

describe('Weather test', function () {
    beforeAll(async function () {
        logger.info('Start weather test');
        browser.waitForAngularEnabled(false);
        WeatherPage.open('https://www.tut.by/');
    });

    it('Weather equal check', async function () {
        let weather = await WeatherPage.getMessage(WeatherPage.WeatherElement);
        let regex = /((\+[1-9]{1,2}|\-[1-9]{1,2}|0)°)/;
        await WeatherPage.click(WeatherPage.WeatherElement);
        let weatherpage = await WeatherPage.getMessage(WeatherPage.WeatherPageElement);
        weatherpage = weatherpage.match(regex)[1];
        expect(weather).toEqual(weatherpage);
    });

    it('Other town', async function () {
        await WeatherPage.click(WeatherPage.TownElement);
        await WeatherPage.selectTown('Лепель')
    });

    afterAll(async function () {
        logger.info('End weather test');
    });

})