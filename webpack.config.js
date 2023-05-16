//webpack.js.org
const path = require('path');
const webpack = require('webpack')

//Todo arquivo js é um module no Node
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename:'bundle.js'},
    module:{
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use:{
                loader:'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devtool: 'source-map' 
};
