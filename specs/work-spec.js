const WorkPage = require('../Pages/workPage');
const logger = require('../conf').logger;

describe('Work test', function () {
    beforeAll(async function () {
        logger.info('Start work test');
        browser.waitForAngularEnabled(false);
        WorkPage.open('https://www.tut.by/');
    });

    it('Title check', async function () {
        await WorkPage.click(WorkPage.WorkElement);
        let title = 'Работа в Минске, поиск персонала и публикация вакансий - jobs.tut.by'
        expect(await browser.getTitle()).toEqual(title);
    });

    it('Work seacrh', async function () {
        await WorkPage.enterSomething(WorkPage.SearhField, 'iTechArt');
        await WorkPage.click(WorkPage.SubmitButton);
        let array = await WorkPage.getMessage(WorkPage.WorkElements);
        for (let i = 1; i < array.length; i++) {
            expect(array[i].toLowerCase()).toContain('itechart');
        }
    });

    afterAll(async function () {
        logger.info('End work test');
    });

})