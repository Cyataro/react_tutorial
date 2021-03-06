import path from 'path'

const src  = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')
const HtmlWebpackPlugin = require('html-webpack-plugin');

export default {
  entry: src + '/index.jsx',

  output: {
    path: dist,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx']
  },

  resolveLoader: {
    moduleExtensions: ['-loader']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: src + '/index.html',
      filename: 'index.html'
    })
  ]
}
