const merge = require('webpack-merge');
const common = require('./webpack.base.config');

const ENV = process.env.ENV = process.env.NODE_ENV = 'production';

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    strictExportPresence: true,
    rules: [
      {
        oneOf: [
          loaders.urlLoader,
          loaders.jsLoader,
          loaders.tsLoader,
          loaders.cssLoaderProd,
          loaders.lessLoaderProd,
          loaders.scssLoaderProd,
          loaders.fileLoader,
        ]
      }
    ]
  }
});