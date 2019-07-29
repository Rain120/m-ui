const merge = require('webpack-merge');
const path = require('path');
const loaders = require('./scripts/loaders');
const common = require('./scripts/webpack.base.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

module.exports = merge(common, {
  mode: ENV,
  devtool: 'cheap-module-source-map',
  entry: {
    'rmc-ui': path.join(__dirname, './components', 'index'),
  },
  output: {
    path: path.resolve(__dirname, './test'),
    filename: '[name].min.js',
    library: '@zc/rmc-ui',
    libraryTarget: 'umd',
    libraryExport: "default",
    umdNamedDefine: true,
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    }
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        oneOf: [
          loaders.urlLoader,
          loaders.jsLoader,
          loaders.tsLoader,
          loaders.cssLoader,
          loaders.lessLoader,
          loaders.fileLoader,
          loaders.scssLoader,
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
      protectWebpackAssets: false,
      cleanAfterEveryBuildPatterns: ['test/**/*']
    })
  ],
});
