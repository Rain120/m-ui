switch (process.env.NODE_ENV) {
  case 'production':
      module.exports = require('./webpack.config.prod.js')({ env: 'production' });
      break;
  case 'development':
  default:
      module.exports = require('./webpack.config.dev.js')({ env: 'development' });
}
