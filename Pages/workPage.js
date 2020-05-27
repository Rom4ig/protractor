const Element = require('../element');

class WorkPage  {
  get searchField() {
    return new Element('[data-qa="search-input"]');
  }

  get submitButton() {
    return new Element('.supernova-search-submit-text');
  }

  get workElements() {
    return new Element('//div[@data-qa="vacancy-serp__vacancy" or @data-qa="vacancy-serp__vacancy vacancy-serp__vacancy_premium"]');
  }
}

module.exports = new WorkPage();
