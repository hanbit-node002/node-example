const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        index: './js/index'
    },
    output: {
        path: path.join(__dirname, '../server/public'),
        publicPath: "/",
        filename: 'js/[name].bundle.js'
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new CleanWebpackPlugin(['js', 'css'], {
            root: path.join(__dirname, '../server/public'),
            watch: true,
            exclude: ['style.css']
        }),
        new ExtractTextPlugin('css/[name].css')
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader',
                    options: {
                        includePaths: [
                            'style'
                        ]
                    }
                }]
            })
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader'
                }]
            })
        }, {
            test: /\.hbs$/,
            loader: 'handlebars-loader'
        }]
    }
};
