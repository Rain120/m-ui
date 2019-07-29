const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const autoprefixer = require('autoprefixer')({
  // browsers: [
  //   '>1%',
  //   'last 4 versions',
  //   'Firefox ESR',
  //   'not ie < 9',
  // ],
  flexbox: 'no-2009',
});

const precss = require('precss')();
const flexBugFixes = require('postcss-flexbugs-fixes')();

const urlLoader = {
  test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
  loader: require.resolve('url-loader'),
  options: {
    limit: 10000,
    name: '[name].[hash:8].[ext]',
  },
};

// js loader
const jsLoader = {
  test: /\.(js|jsx|mjs)$/,
  include: path.join(__dirname, '../components'),
  loader: require.resolve('babel-loader'),
  options: {
    compact: true,
  },
};


// ts loader
const tsLoader = {
  test: /\.(ts|tsx)$/,
  include: path.join(__dirname, '../components'),
  use: [
    {
      loader: require.resolve('ts-loader'),
      options: {
        transpileOnly: true,
      }
    }
  ]
};

const postcssLoader = {
  loader: require.resolve('postcss-loader'),
  options: {
    plugins: () => [
      flexBugFixes,
      autoprefixer
    ],
  },
};

const precssLoader = {
  loader: require.resolve('postcss-loader'),
  options: {
    plugins: () => [
      precss,
      flexBugFixes,
      autoprefixer
    ],
  },
};

const rawCssLoader = {
  loader: require.resolve('css-loader'),
  options: {
    importLoaders: 1,
  },
};

const cssLoader = {
  test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    // require.resolve('style-loader'),
    rawCssLoader,
    postcssLoader,
  ],
};

// less loader
const lessLoader = {
  test: /\.less$/,
  use: [
    MiniCssExtractPlugin.loader,
    // require.resolve('style-loader'),
    rawCssLoader,
    postcssLoader,
    require.resolve('less-loader')
  ],
};

// scss loader
const scssLoader = {
  test: /\.scss$/,
  use: [
    MiniCssExtractPlugin.loader,
    // require.resolve('style-loader'),
    rawCssLoader,
    precssLoader,
  ],
};

const fileLoader = {
  loader: require.resolve('file-loader'),
  exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
  options: {
    name: '[name].[hash:8].[ext]',
  },
};

module.exports = {
  urlLoader,
  jsLoader,
  tsLoader,
  cssLoader,
  lessLoader,
  scssLoader,
  fileLoader,
  postcssLoader
};
