const path = require('path');
const webpack = require('webpack');
const paths = require('./paths');
const loaders = require('./loaders');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png|gif|cur|ico|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name][hash:8].[ext]"
            }
          }
        ]
      },
      {
        oneOf: [
          loaders.urlLoader,
          loaders.jsLoader,
          loaders.tsLoader,
          loaders.cssLoaderDev,
          loaders.scssLoaderDev,
          loaders.lessLoaderDev,
          loaders.fileLoader,
        ],
      }
    ]
  }
}
