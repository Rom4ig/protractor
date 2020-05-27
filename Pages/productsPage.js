const Element = require('../element');
const regex = /([0-9]+,[0-9]+) р./;

class ProductsPage  {

  get convertLink() {
    return new Element('.convert_link');
  }
  get priceBlock() {
    return new Element('.prices')
  }

  get allManufacturer() {
    return new Element('=Все производители')
  }

  get submitButton() {
    return new Element('[value="Подобрать"]')
  }

  get laptopsArray() {
    return new Element('.head')
  }

  sort(name) {
    return new Element(`=${name}`)
  }

  getPrice() {
    let array = [];
    let arrayBase = this.priceBlock.getTextOfArray();
    arrayBase.splice(0, 1); //1-ый реклама
    for (let item of arrayBase) {
      item = item.match(regex)[1];
      array.push(item);
    }
    return array;
  }

  manufacturer(name) {
   return new Element(`//label[text()[contains(.,'${name}')]]`);
  }
}

module.exports = new ProductsPage();