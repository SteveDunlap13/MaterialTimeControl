
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');



module.exports = webpackMerge(commonConfig, {

  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:3000/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  devServer: {
    historyApiFallback: true,
    compress: true,
    stats: 'minimal'
  }
});