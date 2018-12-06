const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "/src/index.tsx"),
  output: {
    path: path.join(__dirname, "/public/"),
    filename: "main.js"
  },

  // Включить карты кода для отладки вывода webpack
  devtool: "source-map",

  mode: 'development',

  resolve: {
    // Добавить разрешения '.ts' и '.tsx' к обрабатываемым
    extensions: ['.js', '.json', '.ts', '.tsx']
  },

  module: {
    rules: [
      // Все файлы с разрешениями '.ts' или '.tsx' будет обрабатывать 'awesome-typescript-loader'
      {
        test: /\.(ts|tsx)?$/,
        loader: "awesome-typescript-loader"
      },
      // Все карты кода для выходных '.js'-файлов будет дополнительно обрабатывать `source-map-loader`
      // {
      //     test: /\.js$/,
      //     loader: "source-map-loader"
      // },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, '/public'),
    compress: true,
    port: 3000,
    open: true,
    historyApiFallback: true,
    stats: 'errors-only'
  },
  plugins: [
    new webpack.ProvidePlugin({
      "react": "React",
    }),
    new ExtractTextPlugin({filename: 'style.css'})
  ],
  watch: true
};