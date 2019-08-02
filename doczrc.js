const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');

const modifyBundlerConfig = (config, dev) => {
  const styleLoaders = ['css-loader'];
  styleLoaders.unshift(dev ? 'style-loader' : MiniCssExtractPlugin.loader);
  return merge(config, {
    resolve: {
      alias: {
        components: path.resolve(__dirname, './components')
      }
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: styleLoaders
        },
        { test: /\.less$/, use: [...styleLoaders, 'less-loader'] }
      ]
    },
    optimization: {},
    plugins: [
      dev
        ? () => {}
        : new MiniCssExtractPlugin({
            chunkFilename: 'static/css/common.[hash].css'
          })
    ]
  });
}

module.exports = {
  title: '@zc/rmc-ui',
  codeSandbox: false,
  hashRouter: true,
  dest: 'docs',
  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://codemirror.net/theme/material.css'
        }
      ]
    }
  },
  themeConfig: {
    showPlaygroundEditor: true,
    codemirrorTheme: 'material'
  },
  typescript: true,
  propsParser: true,
  notUseSpecifiers: true,
  filterComponents: files => files.filter(filepath => /components\/.*\/*\.(js|jsx|ts|tsx)$/.test(filepath)),
  modifyBundlerConfig,
  plugins: [],
  menu: [
    'Introduction',
    'Quick Start',
    'Changelog',
    {
      name: 'Components'
    }
  ]
}