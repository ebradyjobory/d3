var path = require('path')

module.exports = {
  entry: [
    './src/index.js'
  ],
  resolve: {
    modulesDirectories: ['node_modules']
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  }
}
