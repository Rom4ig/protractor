module.exports = class Page {
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
}