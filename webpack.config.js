const {resolve} = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: [resolve('./src/index.js')]
  },
  devtool: 'source-maps',
  output: {
    path: resolve('./dist'),
    filename: 'react-svg-brush.js',
    library: 'ReactSVGBrush',
    libraryTarget: 'umd',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        include: [resolve('.')]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {name: '[path][name].[ext]'}
          }
        ]
      }
    ]
  }
};
