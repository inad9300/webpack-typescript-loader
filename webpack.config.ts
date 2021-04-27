import { Configuration } from 'webpack'

const config: Configuration = {
  entry: './main.ts',
  target: 'node',
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: [
        'ts-loader',
        // './my-loader.ts', // Works
        './node_modules/my-loader.ts' // Doesn't work
      ]
    }]
  }
}

export default config
