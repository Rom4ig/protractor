const Element = require('../element');

class DollarArchivePage  {
  get calendarFromElement() {
    return new Element('#calendar_from')
  }

  get calendarToElement() {
    return new Element('#calendar_to')
  }

  get submitButton() {
    return new Element('.button.small.m-blue')
  }

  elementSelectByTypeAndRange(range, type) {
    return new Element(`//div[@id="calendar_${range}_popup"]//div/span/select[@data-calendar="${type}"]`);
  }

  elementOptionByTypeAndValue(range, type, value) {
    return new Element(`//div[@id="calendar_${range}_popup"]//div/span/select[@data-calendar="${type}"]/option[@value="${value}"]`);
  }

  elementByBankAndDate(bank, date) {
    return new Element(`//td[count(//th[text()="${bank}"]/preceding-sibling::th)+1][..//td="${date}"]`);
  }

  chooseDate(range, day, month, year) {
    this.elementSelectByTypeAndRange(range, 'y').waitAndClick();
    this.elementOptionByTypeAndValue(range, 'y', year).waitAndClick();
    this.elementSelectByTypeAndRange(range, 'm').waitAndClick();
    this.elementOptionByTypeAndValue(range, 'm', month).waitAndClick();
    new Element(`=${day}`).waitAndClick();
  }

  setDate(startDate, endDate) {
    this.calendarFromElement.waitAndClick();
    this.chooseDate('from', startDate.getDate(), startDate.getMonth(), startDate.getFullYear());
    this.calendarToElement.waitAndClick();
    this.chooseDate('to', endDate.getDate(), endDate.getMonth(), endDate.getFullYear());
    this.submitButton.waitAndClick();
  }
}

module.exports = new DollarArchivePage();