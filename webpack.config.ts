import { Configuration } from 'webpack'

const config: Configuration = {
  entry: './main.js',
  target: 'node',
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        './my-loader.ts', // Works
        // './node_modules/my-loader.ts' // Doesn't work
      ]
    }]
  }
}

export default config
