var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    devServer: {
        disableHostCheck: true,
        port: 9000,
        socket: 'socket',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index_bundle.js',
        hashFunction: 'sha256'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]

}