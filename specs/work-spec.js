const workPage = require('../Pages/workPage');
const logger = require('../logger').logger;
const menu = require('../Pages/menuClass');

describe('Work test', function () {
    beforeAll(async function () {
        logger.info('Start work test');
        browser.get(browser.baseUrl);
    });

    it('Page title should be "Работа в Минске, поиск персонала и публикация вакансий - jobs.tut.by"', async function () {
        await menu.navigate('Работа');
        let  title = 'Работа в Минске, поиск персонала и публикация вакансий - jobs.tut.by'
        expect(await browser.getTitle()).toEqual(title);
    });

    it('The word "itechart" is present in all search results', async function () {
        await workPage.enterTextToElement(workPage.SearhField, 'iTechArt');
        await workPage.clickElement(workPage.SubmitButton);
        let array = await workPage.getElementText(workPage.WorkElements);
        for (let i = 1; i < array.length; i++) {
            expect(array[i].toLowerCase()).toContain('itechart');
        }
    });

    afterAll(async function () {
        logger.info('End work test');
    });

})