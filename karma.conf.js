const path = require('path');

const webpackConfig = require('./webpack.config.js');

var karmaConfig = {

  browsers: ['Chrome_with_debugging'],

  colors: true,

  customLaunchers: {
    Chrome_with_debugging: {
      base: 'Chrome',
      flags: ['--remote-debugging-port=9222']
    }
  },

  files: [
    'test/index.js',
    'test/**/*.test.js'
  ],

  frameworks: ['mocha'],

  logLevel: config.LOG_DEBUG,

  preprocessors: {
    'test/**/*.js': ['webpack']
  },

  urlRoot: '/karma-runner/',

  webpack: webpackConfig,

  webpackMiddleware: {
    stats: 'minimal',
    watchOptions: { // watching with Webpack is better than with Karma
      aggregateTimeout: 300
    }
  },

  reporters: ['progress']

};

module.exports = function(config) {
  config.set(karmaConfig);
};
