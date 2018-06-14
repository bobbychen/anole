const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const output_path = path.resolve(__dirname, './dist');

module.exports = merge(common,{
  devtool: 'source-map',
  output: {
    path: output_path,
    filename: '[name].[chunkhash].bundle.js'
  },
  plugins: [
    new UglifyJSPlugin({sourceMap: true}),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
  ],
  optimization: {
      splitChunks: {
          cacheGroups: {
              commons: {
                  name: 'commons',
                  chunks: 'initial',
                  minChunks: 2
              }
          }
      }
  }
});
