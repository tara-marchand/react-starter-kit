var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var bootstrapPathStylesheets = path.resolve(__dirname, './node_modules/bootstrap-sass/assets/stylesheets');

module.exports = {
    cache: true,
    entry: {
        lib: ['!bootstrap-webpack!./bootstrap-sass.config.js', './app/bootstrap'],
        app: './source/scripts/app.js'
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: 'build/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            // required for bootstrap icons
            {
                test: /\.woff$/,
                loader: 'url-loader?prefix=font/&limit=5000&mimetype=application/font-woff'
            }, {
                test: /\.ttf$/,
                loader: 'file-loader?prefix=font/'
            }, {
                test: /\.eot$/,
                loader: 'file-loader?prefix=font/'
            }, {
                test: /\.svg$/,
                loader: 'file-loader?prefix=font/'
            },

            // required for react jsx
            {
                test: /\.js$/,
                loader: 'jsx-loader'
            }, {
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM'
            },

            // SASS
            {
                test: /\.scss$/,
                loader: 'style!css!sass?sourceMap=true&includePaths[]=' + bootstrapPathStylesheets
            }
        ]
    }
};
