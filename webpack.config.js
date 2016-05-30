var path = require('path');
//var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  devtool: 'eval',
  entry: {
    // 'webpack-dev-server/client?http://localhost:3000',
    // 'webpack/hot/only-dev-server',
    bundle: './src/index',
    bundle2: './src/index2'
  },
  output: {
    path: path.join(__dirname, '_dist'),
    filename: '[name].js',
    publicPath: '/_dist/'
  },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css!postcss"
      },
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      }]
  },
  postcss: function () {
    return [autoprefixer, precss];
  },
  // resolve: {
  //   alias: {
  //         // Workaround https://github.com/Reactive-Extensions/RxJS/issues/832, until it's fixed
  //         'rx$': "path to rx/dist/rx.js file "
  //   }
  // }
};
