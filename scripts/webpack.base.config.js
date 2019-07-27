const webpack = require('webpack');
const path = require('path');

const pkg = require(path.join(process.cwd(), 'package.json'));

module.exports = {
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        VERSION: JSON.stringify(pkg.version)
      }
    }),
  ]
};