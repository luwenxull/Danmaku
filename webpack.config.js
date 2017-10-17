const path = require('path');
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = function(env) {
  return {
    entry: {
      index: './test/test.ts',
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Danmaku',
        template: 'template/index.ejs',
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './devServer',
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: ['ts-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.styl$/,
          loader: 'style-loader!css-loader!stylus-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts'],
    },
  }
};