const { mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "pacificoseguros",
    projectName: "spotify-player",
    webpackConfigEnv,
    argv,
  });

  const config = mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: "replace",
      },
    },
  })(defaultConfig, {
    externals: [/^@ps\/.+/],
    // customize the webpack config here
    module: {
      rules: [
        {
          test: /\.(scss)$/,
          use: [
            require.resolve("style-loader", {
              paths: [require.resolve("webpack-config-single-spa")],
            }),
            require.resolve("css-loader", {
              paths: [require.resolve("webpack-config-single-spa")],
            }),
            require.resolve("sass-loader", {
              paths: [require.resolve("webpack-config-single-spa")],
            }),
          ],
        },
      ],
    },
  });

  return config;
};
