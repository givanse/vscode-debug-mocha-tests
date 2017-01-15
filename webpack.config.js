module.exports = {

 devtool: 'inline-source-map',

  entry: './src/index.js',

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        babelrc: true
      }
    ]
  },

  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  }

};
