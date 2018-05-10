'use strict'

const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

module.exports = {
    entry: {
        dll: [
            'vue',
            'vue-router',
            'vuex',
            'jquery',
            'axios',
            'element-ui',
            'moment'
        ]
    },
    output: {
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [{
            test: /\.(woff|svg|eot|ttf)\??.*$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }, {
            test: /\.(gif|jpg|swf|png)\??.*$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    resolve: {
        modules: ['node_modules'],
        alias: {
            'vue': 'vue/dist/vue.common.js'
        }
    },
    plugins: [
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
            clear: true,
            width: 60
        }),
        /* 跟业务代码一样，该兼容的还是得兼容 */
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery'
        }),
        new ExtractTextPlugin({
            filename: '[name].css'
        })
    ]
}
