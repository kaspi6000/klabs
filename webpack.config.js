const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
  },

  devServer: {
    inline: true,
    port: 8081,
    contentBase: path.resolve(__dirname),
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
