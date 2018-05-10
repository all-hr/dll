'use strict'

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const Clean = require('clean-webpack-plugin')
const packageInfo = require(process.cwd() + '/package.json')
const baseWebpackConfig = require('./webpack.base.conf.js')

const config = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'none',
    output:{
        publicPath:`/node_modules/${packageInfo.name}/dist/dev/${packageInfo.version}/`,
        path:path.resolve(`dist/dev/${packageInfo.version}`)
    },
    plugins: [
        new webpack.DllPlugin({
            context: '.',
            name: '[name]',
            path: `dist/dev/${packageInfo.version}/[name].json`
        }),
        new Clean(['dist/dev'], {
            root: process.cwd()
        })
    ]
  })
  
  module.exports = config