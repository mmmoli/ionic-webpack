
'use strict';

/**
 * Module dependencies
 */
var path              = require('path'),
    webpack           = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ngAnnotatePlugin  = require('ng-annotate-webpack-plugin');

module.exports = {

    cache: true,

    entry: {
        'index': './app/index'
    },

    output: {
        path          : path.join(__dirname, 'www'),
        filename      : 'bundle.js',
        publicPath    : '/',
        chunkFilename : 'modules/[chunkhash].js'
    },

    module: {

        loaders: [{
            test   : /\.css$/,
            loader : 'style!css'
        }, {
            test   : /\.html$/,
            loader : 'html'
        },{
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }, {
            test   : /\.json$/,
            loader : 'json'
        }, {
            test   : /\.scss$/,
            loader : 'style!css!sass?outputStyle=expanded'
        }, {
            test   : /\.woff/,
            loader : 'url?prefix=font/&limit=10000&mimetype=application/font-woff'
        }, {
            test   : /\.ttf/,
            loader : 'file?prefix=font/'
        }, {
            test   : /\.eot/,
            loader : 'file?prefix=font/'
        }, {
            test   : /\.svg/,
            loader : 'file?prefix=font/'
        }, {
            test   : /[\/]angular\.js$/,
            loader : 'exports?angular'
        }, {
            test   : /[\/]ionic\.js$/,
            loader : 'exports?ionic'
        }],

        // NOTE: this helps build speed on larger libraries that do not use commonjs
        noParse: [
            /bower_components/
        ]
    },

    resolve: {
        root: [
            path.join(__dirname, 'app'),
            path.join(__dirname, 'bower_components'),
            path.join(__dirname, 'node_modules')
        ],
        moduleDirectories: [
            'bower_components',
            'node_modules'
        ],
        alias: {
        }
    },

    devtool: 'eval',

    devServer: {
        contentBase: "./app",
        host: "0.0.0.0"
    },

    plugins: [

        new ngAnnotatePlugin({
            add: true
        }),

        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(
                'bower.json', ['main'])
        ),

        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

        new HtmlWebpackPlugin({
            inject: true,
            template: 'app/index.html'
        })
    ]

};
