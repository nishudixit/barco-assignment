
exports.config = {
  framework: 'custom',
  directConnect: true,

  baseUrl: "https://github.com/login",

  frameworkPath: require.resolve('protractor-cucumber-framework'), // path relative to the current config file

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },

  specs: ['../features/login.feature'],

  cucumberOpts: {
    require: [
      './stepDefinitions/*.js'
    ]
  },

  onPrepare: function () {
    browser.driver.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().pageLoadTimeout(40000);
    browser.manage().timeouts().implicitlyWait(40000);
    },
};
