const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    // implement node event listeners here

    specPattern: "cypress/integration/*.js",
  },
  env: {
    orangeHRM_Homepage:
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  },
});
