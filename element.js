const logger = require('./logger').logger;

class Element{
  constructor(selector) {
    this.selector = selector
  }

  waitForElementVisible() {
    const log = `waitForElementVisible: ${this.selector}.`;
    logger.info(log);

    return $(this.selector).waitForDisplayed();
  }

  waitForElementEnabled() {
    const log = `waitForElementEnabled: ${this.selector}.`;
    logger.info(log);

    return $(this.selector).waitForEnabled();
  }

  waitAndClick() {
    const log = `waitAndClick: ${this.selector}.`;
    logger.info(log);

    this.waitForElementEnabled();
    return $(this.selector).click();
  }

  getText() {
    const log = `getText: ${this.selector}`;
    logger.info(log);

    this.waitForElementVisible();
    return $(this.selector).getText();
  }

  setValue(text) {
    const log = `setValue: ${this.selector}. Value: ${text}`;
    logger.info(log);

    this.waitForElementEnabled();
    $(this.selector).setValue(text);
  }

  isEnabled() {
    const log = `isDisplayed: ${this.selector}`;
    logger.info(log);

    return $(this.selector).isEnabled();
  }

  getArray(){
    return $$(this.selector);
  }

  getTextOfArray(){
    let resultArray = [];
    let arrayElements = this.getArray();
    for (let i = 0; i<arrayElements.length; i++){
      resultArray.push(arrayElements[i].getText())
    }

    const log = `getTextOfArray: ${this.selector}. Value: ${resultArray}`;
    logger.trace(log);
    return resultArray;
  }
}
module.exports = Element;