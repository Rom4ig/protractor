const weatherPage = require('../../Pages/weatherPage');
const logger = require('../../logger').logger;
const menu = require('../../Pages/menuClass');

describe('Weather test', () => {
  beforeAll(() => {
    logger.info('Start weather test');
  });

  it('Menu weather element must be equal with page weather element', () => {
    let weather = menu.weatherElement.getText();
    menu.weatherElement.waitAndClick();
    let weatherpage = weatherPage.weatherPageElement.getText();

    expect(weatherpage).toEqual(weather);
  });

  it('Town after selecting on the weather page - "Полоцке"', () => {
    weatherPage.townSelector.waitAndClick();
    let town = 'Полоцк';
    weatherPage.town(town).waitAndClick();
    let currentTown = weatherPage.townSelector.getText();
    expect(currentTown).toEqual('Полоцке');
  });

  afterAll(() => {
    logger.info('End weather test');
  });

});