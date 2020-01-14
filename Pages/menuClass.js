const Page = require('./page');
class Menu extends Page {
    WeatherElement = element(by.css('[class="weather"]'));
    DollarElement = element(by.css('[class="sub-inf"]'));
    LoginButton = element(by.css('[data-target-popup="authorize-form"]'));
    Name = element(by.css('[class="uname"]'));

    async elementByLinkText(text) {
        return element(by.linkText(text));
    }
    async navigate(text) {
        let elem = await this.elementByLinkText(text);
        await elem.click();
    }
}
module.exports = new Menu();