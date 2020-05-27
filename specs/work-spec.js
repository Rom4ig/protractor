const workPage = require('../Pages/workPage');
const logger = require('../logger').logger;
const menu = require('../Pages/menuClass');

describe('Work test', () => {
  beforeAll(() => {
    logger.info('Start work test');
  });

  it('Page title should be "Работа в Минске, поиск персонала и публикация вакансий - jobs.tut.by"', () => {
    menu.navigate('Работа');
    let title = 'Работа в Витебске, свежие вакансии - vitebsk.jobs.tut.by';
    expect(browser.getTitle()).toEqual(title);
  });

  it('The word "itechart" is present in all search results', () => {
    workPage.searchField.setValue('iTechArt');
    workPage.submitButton.waitAndClick();
    workPage.submitButton.waitForElementVisible();
    let array = workPage.workElements.getTextOfArray();
    for (let i = 1; i < array.length; i++) {
      expect(array[i].toLowerCase()).toContain('itechart');
    }
  });

  afterAll(() => {
    logger.info('End work test');
  });

});