let brow = 'chrome';
if (process.argv.length > 3) { //Check browser
  let regex = /--browser=([A-Za-z]+)/;
  brow = process.argv[3].match(regex)[1];
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

const log4js = require('log4js');
log4js.configure({
  appenders: {
    file: { type: 'file', filename: 'logs/debug.log' },
    stdout: { type: 'stdout' }
  },
  categories: {
    default: { appenders: ['file', 'stdout'], level: 'debug' },
    trace: { appenders: ['file'], level: 'trace' }
  }
});

const loggerDefault = log4js.getLogger();
const loggerTrace = log4js.getLogger('trace');

exports.logger = {
  trace: str => loggerTrace.trace(str),
  debug: str => loggerDefault.debug(str),
  info: str => loggerDefault.info(str),
  warn: str => loggerDefault.warn(str),
  error: str => loggerDefault.error(str),
  fatal: str => loggerDefault.fatal(str)
}

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/*-spec.js'], 
  capabilities: {
  'browserName': brow,
	},
  //framework: 'jasmine2',
  onPrepare: function() {
	browser.waitForAngularEnabled(false);
	browser.driver.manage().window().maximize();
    var AllureReporter = require('jasmine-allure-reporter');
	jasmine.getEnv().addReporter(addScreenShots);
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
  },
      beforeLaunch: () => {
        loggerDefault.info('Protractor tut.by test started');
    },
    onComplete: () => {
        loggerDefault.info('Protractor tut.by test finished');
    }
};

/* multiCapabilities: [
    {'browserName': 'chrome',
	'chromeOptions': {
    'args': ['--start-maximized']
   }
  },
    {'browserName': 'firefox',
	'moz:firefoxOptions': {
    'args': ['--start-maximized']
  }
	}
  ],
};*/
