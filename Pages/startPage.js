const fs = require('fs');
const Page = require('./page');
class StartPage extends Page {
    logger = require('../conf').logger;
    LoginButton = element(by.css('[data-target-popup="authorize-form"]'));
    EnterButton = element(by.css('[value="Войти"]'));
    LoginField = element(by.css('[name="login"]'));
    ErrorElem = element(by.css('[class="b-auth__error"]'));
    PasswordField = element(by.css('[name="password"]'));
    Name = element(by.css('[class="uname"]'));

    async enterSomething(element, text, size) {
        if (text === undefined) {
            if (size === undefined) {
                size = 5;
            }
            text = await this.getRandom(size);
        }
        await element.sendKeys(text);
    }

    async clearElem(elem) {
        await elem.clear();
    }

    async clear() {
        fs.writeFileSync('./logs/debug.log', "");
    }

    async getMessage(elem) {
        let text;
        await elem.getText().then((mess) => {
            text = mess;
            this.logger.info(text);
        });
        return text;
    }
}

module.exports = new StartPage();