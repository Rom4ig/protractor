const weatherPage = require('../Pages/weatherPage');
const logger = require('../logger').logger;
const menu = require('../Pages/menuClass');

describe('Weather test', () => {
  beforeAll(() => {
    logger.info('Start weather test');
  });

  it('Menu weather element must be equal with page weather element', () => {
    let weather = menu.weatherElement.getText();
    let regex = /(([+|-][1-9]{1,2}|0)°)/;

    menu.weatherElement.waitAndClick();
    let weatherpage = weatherPage.weatherPageElement.getText();
    weatherpage = weatherpage.match(regex)[1];
    expect(weatherpage).toEqual(weather);
  });

  it('Town after selecting on the weather page - "Лепеле"', () => {
   weatherPage.townSelector.waitAndClick();
    let town = 'Лепель';
    weatherPage.town(town).waitAndClick();
    let currentTown = weatherPage.townSelector.getText();
    expect(currentTown).toEqual('Лепеле');
  });

  afterAll(() => {
    logger.info('End weather test');
  });

});