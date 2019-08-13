const  path = require('path');
const env = process.env.NODE_ENV
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.join(__dirname,'../dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            { 
                test: /\.scss$/, 
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader', 
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[path][name]__[local]_[hash:base64:5]',
                                hashPrefix: 'hash',
                              },
                        }
                    },
                    'sass-loader'
                ] 
            }, // 打包处理 scss 文件的 loader
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.png$/,
                            name: '[1]-[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions:['.js','.jsx','.json']
    }
}