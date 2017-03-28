const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

var styleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/public/dist',
    filename: 'bundle.js',
    library: 'table'
  },

  resolve: { extensions: ['.js', '.jsx','.css']},

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader?-babelrc,presets[]=es2015'
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    },{
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    }]
  },

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 300
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        unsafe: true
      }
    }),
    new styleLintPlugin({
      configFile: ".stylelintrc.json"
    }),
  ]
}
