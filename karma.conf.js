var webpackConfig = require('./webpack.config.js');
var webpack = require('webpack');
var path = require('path');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'src/tests/index.jsx'
    ],
    preprocessors: {
      'src/tests/index.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: webpackConfig.module.loaders,
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};