const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const paths = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pkg = require(path.join(process.cwd(), 'package.json'));

module.exports = {
  entry: path.join(__dirname, '../components', 'index'),
  plugins: [
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, '../examples/public/index.html'),
    //   filename: 'index.html'
    // }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        VERSION: JSON.stringify(pkg.version)
      }
    }),
  ]
};