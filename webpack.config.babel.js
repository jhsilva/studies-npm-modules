let config = {
  entry: {
    app: './src/js/index.js'
  },
  output: {
    path: './dist',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        include: './src/js',
        query: {
          presets: [
            'react',
            'es2015'
          ]
        }
      }
    ]
  }
}

export default config;
