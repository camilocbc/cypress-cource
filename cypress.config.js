const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const  addCucumberPreprocessorPlugin  = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


module.exports = defineConfig({
  watchForFileChanges: true,
  defaultCommandTimeout: 5000,
 // reporter: "mochawesome",
  screenshotOnRunFailure: true,
  reporterOptions:{
      charts:true,
      overwrite:false,
      html: false,
      json: true,
      reportDir: "cypress/reports",
      reportPageTitle: "custom-title",
      embeddedScreenshots: true
  },

  reporter: "cypress-mochawesome-reporter",
  
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
     require('@cypress/grep/src/plugin')(config);
      on('task',{downloadFile})
    
      
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    
    baseUrl: 'https://www.saucedemo.com',
   // specPattern: "**/*.feature",
    chromeWebSecurity: false,
    //experimentalStudio: true
   
   
  },
});
