const { mergeConfig } = require('vite');

module.exports = {
  "stories": ["../src/pages/**/*.stories.mdx", "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-a11y"],
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  "features": {
    "storyStoreV7": true
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Use the same "resolve" configuration as your app
      // resolve: (await import('../vite.config.js')).default.resolve,
      // Add dependencies to pre-optimization
      base: "/05-design-system/",
      // optimizeDeps: {
      //   include: ['storybook-dark-mode'],
      // },
    });
  },
  docs: {
    autodocs: true
  }
};