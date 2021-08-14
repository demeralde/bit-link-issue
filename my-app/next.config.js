/** @type {import('next').NextConfig} */
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([]);

module.exports = withPlugins(
  [
    withTM,
    [
      withImages,
      {
        exclude: /\.svg$/,
      },
    ],
  ],
  {
    reactStrictMode: true,
    poweredByHeader: false,
    webpack: (config, options) => {
      if (!options.isServer) {
        config.resolve.alias["@sentry/node"] = "@sentry/browser";
      }
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
  }
);
