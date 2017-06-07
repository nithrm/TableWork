const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = (env = {}) => {
  const isProduction = env.production === true;
  const myPlugins = [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: './public/vendor.bundle.js',
      minChunks: Infinity
    })
  ];

  if (isProduction) {
    myPlugins.push(
      new webpack.optimize.OccurrenceOrderPlugin(true),
      new webpack.optimize.UglifyJsPlugin({
        comments: true,
        sourceMap: true,
        warnings: false,
        drop_console: true,
        minimize: true,
        exclude: [
          './public/vendor.bundle.js'
        ]
      }),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 0,
        minRatio: 0
      })
    );
  };

  return {
    entry: {
      app: './browser/react/index.js',
      vendor: [
        'react',
        'react-dom'
      ]
    },
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
    plugins: myPlugins
  };
};
