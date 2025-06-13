const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://inkmaster.duckdns.org:4200/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
