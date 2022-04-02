module.exports = {
  configureWebpack: {
    devtool: "cheap-module-source-map",
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("vue", "@vue/compat");

    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2,
            },
          },
        };
      });
  },
  pages: {
    popup: {
      template: "public/browser-extension.html",
      entry: "./src/popup/main.js",
      title: "Popup",
    },
    override: {
      template: "public/browser-extension.html",
      entry: "./src/override/main.js",
      title: "Override",
    },
  },
  pluginOptions: {
    browserExtension: {
      components: {
        background: true,
        override: true,
        popup: true,
      },
      componentOptions: {
        background: {
          entry: "src/background.js",
        },
        override: {
          entry: "src/override/main.js",
        },
      },
    },
  },
};
