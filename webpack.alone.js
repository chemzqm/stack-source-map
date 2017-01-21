var webpack = require('webpack')

module.exports = {
  entry: './index.js',
  debug: false,
  output: {
    path: '.',
    filename: 'stacksourcemap.js',
    libraryTarget: 'umd',
    library: 'StackSourceMap'
  },
  module: {
    loaders: []
  },
  plugins:[new webpack.optimize.UglifyJsPlugin({ })]
}

