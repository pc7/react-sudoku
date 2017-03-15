
module.exports = {
  entry: './bundle-entry.js',
  output: {
    filename: 'public/bundle.js'
  },
  module: {
    // TODO: Convert loaders to Webpack 2 syntax.
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'] 
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },
      {
        test: /\.css$/,
        loader: 'postcss-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.es6']
  },
  plugins: [
  ],
  watch: true
}
