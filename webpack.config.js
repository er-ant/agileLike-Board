const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js",
    library: "table"
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 300
  },

  devtool: "inline-source-map"
}
