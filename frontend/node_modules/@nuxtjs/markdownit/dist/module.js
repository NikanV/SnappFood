'use strict';

const path = require('path');
const defu2 = require('defu');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

const defu2__default = /*#__PURE__*/_interopDefaultLegacy(defu2);

const moduleDefaults = {
  runtime: true,
  preset: "default",
  linkify: true,
  breaks: true,
  use: []
};

function markdownitModule(moduleOptions) {
  const {nuxt, extendBuild, addPlugin} = this;
  const options2 = defu2__default['default'](moduleOptions, nuxt.options.markdownit, moduleDefaults);
  const moduleLoader = {
    loader: "@nuxtjs/markdownit-loader",
    options: options2
  };
  extendBuild((config) => {
    config.module.rules.push({
      test: /\.md$/,
      oneOf: [
        {
          resourceQuery: /^\?vue/,
          use: [moduleLoader]
        },
        {
          use: ["raw-loader", moduleLoader]
        }
      ]
    });
  });
  if (options2.runtime === true) {
    delete options2.runtime;
    addPlugin({
      src: path.resolve(__dirname, "runtime/plugin.js"),
      fileName: path.join("markdownit.js"),
      options: options2
    });
  }
}
markdownitModule.meta = require("../package.json");

module.exports = markdownitModule;
