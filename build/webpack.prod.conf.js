'use strict'

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const Clean = require('clean-webpack-plugin')
const packageInfo = require(process.cwd() + '/package.json')
const baseWebpackConfig = require('./webpack.base.conf.js')

const config = merge(baseWebpackConfig, {
    mode: 'production',
    devtool: 'none',
    output:{
        publicPath:`https://cdn.2haohr.com/dianmi-fe/dianmi-fe-enterprise-dll/${packageInfo.version}/`,
        path:path.resolve(`dist/pd/${packageInfo.version}`)
    },
    plugins: [
        new webpack.DllPlugin({
            context: '.',
            name: '[name]',
            path: `dist/pd/${packageInfo.version}/[name].json`
        }),
        new Clean(['dist/pd'], {
            root: process.cwd()
        })
    ]
  })
  
  module.exports = config