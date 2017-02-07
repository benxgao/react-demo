const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: '#cheap-module-eval-source-map',
  entry: [
    './src/index',
  ],
  output: {
    path: './public',
    filename: 'static/bundle-[hash].js',
    publicPath: '',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.hbs'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel?cacheDirectory',
        exclude: /node_modules/,
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-template'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!resolve-url!sass?sourceMap',
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.eot$|\.woff2$/,
        loader: 'file',
      },
    ],
  },
  postcss: [
    autoprefixer({
      browsers: ['last 3 versions'],
    }),
  ],
};
