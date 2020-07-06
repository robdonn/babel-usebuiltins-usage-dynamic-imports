const path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'source-map',
  entry: [require.resolve('regenerator-runtime'), './src/index.js'],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
};
