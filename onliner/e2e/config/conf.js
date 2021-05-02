exports.config = {
    directConnect: true,
  
    capabilities: {
      browserName: 'chrome',
    },
  
    framework: 'mocha',
  
    specs: ['../specs/spec.js'],
  
    onPrepare: async function(){
      await browser.waitForAngularEnabled(false);
      await browser.manage().window().maximize()
    },
  
    mochaOpts: {
      reporter: "spec",
      timeout: 300000
    }
  } 