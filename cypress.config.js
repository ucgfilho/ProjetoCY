const { defineConfig } = require("cypress");
const dotenv = require("dotenv");

dotenv.config();

const username =
  process.env.CYPRESS_username ??
  process.env.CYPRESS_USERNAME ??
  "standard_user";
const password =
  process.env.CYPRESS_password ??
  process.env.CYPRESS_PASSWORD ??
  "secret_sauce";

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter",
    mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/reports/junit/results-[hash].xml",
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: "Relatório de testes",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
  },
  chromeWebSecurity: false,
  env: {
    username,
    password,
  },
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      // implement node event listeners here
    },
  },
});
