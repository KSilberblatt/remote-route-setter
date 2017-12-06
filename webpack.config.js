const path = require('path');

module.exports = {
  context: __dirname,
  entry: './lib/entry.js',
  output: {
   path: path.resolve(__dirname, 'dist'),
   filename: 'bundle.js'
  },
  resolve: {
   extensions: ['.js', '*']
  },
  module: {
    loaders: [{
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }]
    }]
  }
};
