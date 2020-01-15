const argv = require('yargs').argv
const logger = require('./logger').logger;
let brow = 'chrome';
if (argv.browser !== undefined) { //Check browser
  brow = argv.browser;
}

let addScreenShots = new function () {
    this.specDone = function (result) {        
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
            });
    };
}

exports.config = {
  framework: 'jasmine2',
  directConnect: true,
    capabilities: {
  'browserName': brow,
	},
  specs: ['specs/*-spec.js'], 
  baseUrl:'https://www.tut.by/',
  onPrepare: function() {
	browser.waitForAngularEnabled(false);
	browser.driver.manage().window().maximize();
    let AllureReporter = require('jasmine-allure-reporter');
	jasmine.getEnv().addReporter(addScreenShots);
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
  },
      beforeLaunch: () => {
		let fs = require('fs');
		fs.writeFileSync('./logs/debug.log', "");
		logger.debug('Logs clear');
        logger.info('Protractor tut.by test started');
    },
    onComplete: () => {
        logger.info('Protractor tut.by test finished');
    }
};
