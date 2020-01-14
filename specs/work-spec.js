const WorkPage = require('../Pages/workPage');
const logger = require('../logger').logger;
const Menu = require('../Pages/menuClass');

describe('Work test', function () {
    beforeAll(async function () {
        logger.info('Start work test');
        browser.get(browser.baseUrl);
    });

    it('Title of page check', async function () {
        await Menu.navigate('Работа');
        title = 'Работа в Минске, поиск персонала и публикация вакансий - jobs.tut.by'
        expect(await browser.getTitle()).toEqual(title);
    });

    it('The word is present in all search results', async function () {
        await WorkPage.enterTextToElement(WorkPage.SearhField, 'iTechArt');
        await WorkPage.clickElement(WorkPage.SubmitButton);
        array = await WorkPage.getElementText(WorkPage.WorkElements);
        for (i = 1; i < array.length; i++) {
            expect(array[i].toLowerCase()).toContain('itechart');
        }
    });

    afterAll(async function () {
        logger.info('End work test');
    });

})