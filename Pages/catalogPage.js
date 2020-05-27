const Element = require('../element');


class CatalogPage  {
  category(name) {
    return new Element(`//div[.='${name}']/../a`)
  }
}

module.exports = new CatalogPage();