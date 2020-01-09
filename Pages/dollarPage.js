const Page = require('./page');

class DollarPage extends Page {
    DollarElement = element(by.css('[class="green"]'));
    FinansButton = element(by.linkText('Финансы'));
    CalendarElement = element(by.css('[class="col extended_date"]'));
    DollarAcrhiveElement = element(by.xpath(''));
    YearSelect = element.all(by.xpath('//div[@id="calendar_from_popup"]//div/span/select[@data-calendar="y"]'));
    MonthSelect = element(by.xpath('//div[@id="calendar_from_popup"]//div/span/select[@data-calendar="m"]'));
    SubmitButton = element(by.css('[class="button small m-blue"]'));

    async startDate(day, month, year) {
        await this.click(this.CalendarElement);
        await this.click(this.YearSelect);
        await this.click(element(by.xpath(`//div[@id="calendar_from_popup"]//div/span/select[@data-calendar="y"]/option[@value="${year}"]`)));
        await this.click(this.MonthSelect);
        await this.click(element(by.xpath(`//div[@id="calendar_from_popup"]//div/span/select[@data-calendar="m"]/option[@value="${month - 1}"]`)));
        await this.click(element(by.linkText(`${day}`)));
        await this.click(this.SubmitButton);
    }

    async elementByValueAndCurrency(value, currency) {
        return element(by.xpath(`//div[@id="tab-best"]//table[@class="w-currency_table"]//tbody//tr[count(//div[@id="tab-best"]//table//tbody//tr//td//a[text()="${currency}"]/../../preceding-sibling::tr)+1]//td[count(//th[text()="${value}"]/preceding-sibling::th)+1]`))
    }

    async elementByBankAndDate(bank, date) {
        return element(by.xpath(`//td[count(//th[text()="${bank}"]/preceding-sibling::th)+1][..//td="${date}"]`))
    }
}

module.exports = new DollarPage();