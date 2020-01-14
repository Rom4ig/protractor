class Page {
    logger = require('../logger').logger;
    
    async clickElement(element) {
        await element.click();
    }

    async getRandomText(length) {
        let rnd = '';
        while (rnd.length < length)
            rnd += Math.random().toString(36).substring(2);
        this.logger.trace('Generated ' + rnd.substring(0, length));
        return rnd.substring(0, length);
    }

    async getElementText(elem) {
        let mess;
        await elem.getText().then((text) => {
            mess = text;
            this.logger.trace(`Get message - ${mess}`);
        });
        return mess;
    }


    async enterTextToElement(element, text) {
        this.logger.trace(`Enter ${text}`);
        await element.sendKeys(text);
    }

    async clearElemValue(elem) {
        await elem.clear();
    }

}
module.exports = Page;