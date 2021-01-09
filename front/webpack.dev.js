const { merge } = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist',
        port: 9000,
        open: true,
    },
})