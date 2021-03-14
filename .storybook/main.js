const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.@(tsx|mdx)"],
  addons: ["@storybook/preset-create-react-app", "@storybook/addon-essentials", "storybook-dark-mode"],
  webpackFinal: async (config) => {

    console.log({ __dirname });
    config.resolve = await {
      ...config.resolve,
      alias: {
        ...config.alias,
        "@components": path.resolve(__dirname, "../src/components"),
        "@configs": path.resolve(__dirname, "../src/configs"),
        "@contexts": path.resolve(__dirname, "../src/contexts"),
        "@hooks": path.resolve(__dirname, "../src/hooks"),
        "@styles": path.resolve(__dirname, "../src/styles"),
        "@utils": path.resolve(__dirname, "../src/utils"),
        "@testsUtils": path.resolve(__dirname, "../src/testsUtils")
      }
    };

    return config
  }
}
