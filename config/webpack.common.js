const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/index.js'],
  // entry: {
  //   nameA: paths.src + '/index.js',
  //   nameB: paths.src + '/js/carrito.js',
  // },

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'Smartrix',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/template.html', // template file
      filename: 'index.html', // output file
      //chunks: ["nameA"],
    }),
    new HtmlWebpackPlugin({
      title: 'Eventos',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/eventos.html', // template file
      filename: 'eventos.html', // output file
      //chunks: ["nameA"],
    }),
    new HtmlWebpackPlugin({
      title: 'Evento',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/evento.html', // template file
      filename: 'evento.html', // output file
      //chunks: ["nameA"],
    }),
    new HtmlWebpackPlugin({
      title: 'Carrito',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/carrito.html', // template file
      filename: 'carrito.html', // output file
      //chunks: ["nameB"],
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, use: ['babel-loader'] },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
      assets: paths.public,
    },
  },

  // externals: {
  //   // require("jquery") is external and available
  //   //  on the global var jQuery
  //   jquery: 'jQuery',
  // },
}
