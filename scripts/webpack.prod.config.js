const merge = require('webpack-merge');
const path = require('path');
const loaders = require('./loaders');
const common = require('./webpack.base.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'production';

console.log(
  loaders.cssLoaderProd,
  '111\n',
  loaders.lessLoaderProd,
  '222\n',
  loaders.scssLoaderProd
)

module.exports = merge(common, {
  mode: ENV,
  devtool: 'source-map',
  entry: {
    'rmc-ui': path.join(__dirname, '../components', 'index'),
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
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
    enforceExtension: false,
    extensions: [".ts", ".tsx", ".js", ".jsx", ".less"]
  },
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
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
      chunkFilename: 'style/[id].css',
      ignoreOrder: false,
    }),
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
      protectWebpackAssets: false,
      cleanAfterEveryBuildPatterns: ['lib/**/*']
    })
  ]
});