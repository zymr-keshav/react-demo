// var webpack = require('webpack');
var path = require('path');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src/async');

var config = {
  context : __dirname,
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR ,
    filename: "bundle.js",
    publicPath: '/'
  },
  devtool : 'inline-source-map',
  devServer: {
        inline: true,
        historyApiFallback: true,
        hot: true,
        contentBase: "./public"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: ['es2015','react'] }
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },
      {
        test: /\.css$/,
        loader: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.inline.svg$/,
        loader: 'babel-loader!svg-react-loader'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|^(?!.*\.inline\.svg$).*\.svg$/,
        loader: 'url-loader'
      },
      {
          test: /\.(woff2?|eot|ttf)$/i,
          exclude: /node_modules/,
          loader: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.json', '.jsx', '.css', '.scss']
  }
};

module.exports = config;