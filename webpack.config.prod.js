var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        app: [
            './source/scripts/index.jsx'
        ],
        lib: [ 'lodash', 'react', 'react-dom', 'react-addons-transition-group', 'object-assign', 'redux', 'react-redux', 'redux-thunk', 'classnames', 'firebase' ]
    },

    output: {
        filename: 'scripts/app.js',
        path: path.join(__dirname, 'build'),
        publicPath: '/'
    },

    /**
     *  https://webpack.github.io/docs/code-splitting.html
     *  Removes all modules in the `lib` chunk from the `app` chunk.
     *  `app.js` will now contain just app code. Its dependencies are in `lib.js`.
     */
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'lib', /* filename= */'scripts/lib.js'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('styles/app.css', {
            publicPath: '/styles/',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'source/index.html',
            inject: true
        })
    ],

    module: {
        loaders: [
            {
                exclude: /node_modules/,
                test: /\.jsx?$/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
            },
            {
                test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    }
};
