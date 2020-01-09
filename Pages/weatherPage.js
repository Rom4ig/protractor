const Page = require('./page');

class WeatherPage extends Page {
    WeatherElement = element(by.css('[class="weather"]'));
    WeatherPageElement = element(by.css('[class="fcurrent-top"]'));
    TownElement = element(by.css('[class="dotted"]'));

    async selectTown(town) {
        await this.click(element(by.linkText(town)));
    }
}

module.exports = new WeatherPage();