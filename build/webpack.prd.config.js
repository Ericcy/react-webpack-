const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(base, {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    devServer: {}
})