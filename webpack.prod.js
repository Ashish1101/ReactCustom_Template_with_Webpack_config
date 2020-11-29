const path = require('path')
const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


module.exports =  merge(commonConfig , {
    mode:'production',
    output: {
        filename:'main.[contenthash].js',
        path: path.resolve(__dirname , 'build'),
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    module: {
        rules: [
          {
              test: /\.css$/,
              use:[MiniCssExtractPlugin.loader,"css-loader"]
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'images/[hash][ext][query]'
            }
          },
        ]
      },
      plugins: [
          new MiniCssExtractPlugin({
              filename:'[name].[contenthash].css'
          }),
          new CleanWebpackPlugin(),
          new HtmlMinimizerPlugin()
      ],
    //   optimization: {
    //     minimize: true,
    //     minimizer: [
    //       // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
    //       `...`, new CssMinimizerPlugin()
    //     ],
    //   },
})