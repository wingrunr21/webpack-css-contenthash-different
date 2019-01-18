const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/template.ejs"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    })
  ]
};
