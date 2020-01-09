const fs = require('fs');

module.exports = class Page {
    logger = require('../conf').logger;
    open(link) {
        browser.get(link);
    }

    async click(element) {
        await element.click();
    }

    async getRandom(i) {
        let rnd = '';
        while (rnd.length < i)
            rnd += Math.random().toString(36).substring(2);
        this.logger.trace('Generated ' + rnd.substring(0, i));
        return rnd.substring(0, i);
    }

    async getMessage(elem) {
        let mess;
        await elem.getText().then((text) => {
            mess = text;
            this.logger.trace(`Get message - ${mess}`);
        });
        return mess;
    }

    async clear() {
        fs.writeFileSync('./logs/debug.log', "");
    }

    async enterSomething(element, text, size) {
        if (text === undefined || text === "") {
            if (size === undefined) {
                size = 5;
            }
            text = await this.getRandom(size);
        }
        this.logger.trace(`Enter ${text}`);
        await element.sendKeys(text);
    }

    async clearElem(elem) {
        await elem.clear();
    }

}