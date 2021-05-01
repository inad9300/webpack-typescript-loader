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
      use: ['./node_modules/my-loader.ts']
    }]
  }
}

export default config
