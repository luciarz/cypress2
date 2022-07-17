const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5ko13a',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
