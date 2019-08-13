const dev = require('./webpack.dev.config.js');
const prd = require('./webpack.prd.config.js')
const cfg = process.env.NODE_ENV == 'production'?prd:dev;

module.exports = cfg