'use strict';

const webpack = require('webpack');

module.exports = (env = {}) => {
  const isProduction = env.production === true;
  let myPlugins = [];

  if (isProduction) {
    myPlugins = [
      new webpack.optimize.UglifyJsPlugin({ comments: true, sourceMap: true })
    ];
  };

  return {
    entry: './browser/react/index.js',
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    context: __dirname,
    devtool: isProduction ? 'nosources-source-map' : 'source-map',
    module: {
      loaders: [
        {
          test: /jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'env'],
            plugins: ['transform-object-rest-spread']
          }
        }
      ]
    },
    plugins: myPlugins,
    externals: {
      'react': 'react',
      'react-dom': 'reactDOM'
    }
  }
};
