import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const config: Configuration = {
  mode: 'development',
  entry: './src/entry.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      resourceQuery: /raw/,
      type: 'asset/source',
    }, {
      test: /\.css$/,
      resourceQuery: { not: /raw/ },
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      options: {

      },
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}

export default config;
