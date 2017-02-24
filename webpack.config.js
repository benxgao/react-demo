const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: '#cheap-module-eval-source-map',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'static/bundle-[hash].js',
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: '200.html', // For Surge.sh
      template: './src/index.html'
    }),
    new ExtractTextPlugin("style.css"),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.html/,
        use: ['html-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
             loader: 'css-loader'
            },
            {
             loader: 'postcss-loader',
             options: {
               plugins: function () {
                 return [
                   autoprefixer({
                     browsers: ['last 3 versions']
                   })
                 ];
               }
             }
            },
            {
             loader: 'resolve-url-loader'
            },
            {
             loader: 'sass-loader',
             options: {
               sourceMap: true
             }
            }
         ]
        })

      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.eot$|\.woff2$/,
        use: ['file-loader']
      },
    ],
  }
};
