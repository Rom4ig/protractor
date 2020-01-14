const Page = require('./page');

class DollarArchivePage extends Page {
    CalendarFromElement = element(by.css('[id="calendar_from"]'));
    CalendarToElement = element(by.css('[id="calendar_to"]'));
    SubmitButton = element(by.css('[class="button small m-blue"]'));
    async elementSelectByTypeAndRange(range, type) {
        return element(by.xpath(`//div[@id="calendar_${range}_popup"]//div/span/select[@data-calendar="${type}"]`))
    }

    async elementOptionByTypeAndValue(range, type, value) {
        return element(by.xpath(`//div[@id="calendar_${range}_popup"]//div/span/select[@data-calendar="${type}"]/option[@value="${value}"]`))
    }
    
    async elementByBankAndDate(bank, date) {
        return element(by.xpath(`//td[count(//th[text()="${bank}"]/preceding-sibling::th)+1][..//td="${date}"]`))
    }

    async chooseDate(range, day, month, year) {
        await this.clickElement(await this.elementSelectByTypeAndRange(range, 'y'));
        await this.clickElement(await this.elementOptionByTypeAndValue(range, 'y', year));
        await this.clickElement(await this.elementSelectByTypeAndRange(range, 'm'));
        await this.clickElement(await this.elementOptionByTypeAndValue(range, 'm', month));
        await this.clickElement(element(by.linkText(`${day}`)));
    }

    async setDate(startDate, endDate) {
        await this.clickElement(this.CalendarFromElement);
        await this.chooseDate('from', startDate.getDate(), startDate.getMonth(), startDate.getFullYear());
        await this.clickElement(this.CalendarToElement);
        await this.chooseDate('to', endDate.getDate(), endDate.getMonth(), endDate.getFullYear());
        await this.clickElement(this.SubmitButton);
    }
}
module.exports = new DollarArchivePage();