const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './src'),
    target: 'node',
    entry: {
        server: './server.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // exclude: /(node_modules|bower_components)/,
                // include: path.resolve(__dirname, './src'),
                options: {
                    presets: ['env', 'react', 'stage-0'],
                    plugins: [['transform-runtime', {
                        helpers: false,
                        polyfill: false,
                        regenerator: true
                    }], 'transform-async-to-generator']
                }
            }
        ]
    }
};