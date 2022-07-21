import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    supportFile: "cypress/support/commands.{ts, tsx, js, jsx}",
    viewportHeight: 768,
    viewportWidth: 1024,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
  },
});
