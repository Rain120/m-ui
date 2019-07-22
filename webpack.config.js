switch (process.env.NODE_ENV) {
  case 'production':
    module.exports = require('./webpack.prod.config')({ env: 'production' });
    break;
  case 'development':
  default:
    module.exports = require('./webpack.dev.config')({ env: 'development' });
}
