exports.config = {
  directConnect: true,

  capabilities: {
    browserName: 'chrome',
  },

  framework: 'mocha',

  specs: ['spec.js'],

  onPrepare: async function(){
    await browser.waitForAngularEnabled(false);
  },

  mochaOpts: {
    reporter: "spec",
    // slow: 3000, 
    timeout: 100000
  }
}
