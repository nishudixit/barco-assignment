import { Config } from "protractor";

export let config: Config = {
  directConnect: true,
  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'), // path relative to the current config file

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ['../features/login.feature'],

  cucumberOpts: {
    require: [
      'path/to/step/definitions/**/*.steps.js'
    ]
  }

};
