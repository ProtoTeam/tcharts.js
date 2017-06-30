/**
 * Copyright (c) 2017 hustcc
 * License: ISC
 * GitHub: https://github.com/hustcc/tcharts.js
 **/

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'tcharts.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'TCharts',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [{
      test: /.js$/,
      loader: 'babel-loader'
    }]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
      compress: { warnings: false }
    })
  ]
};