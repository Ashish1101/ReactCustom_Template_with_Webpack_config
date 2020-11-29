const path = require('path')
const commonConfig = require('./webpack.common')
const { merge } = require('webpack-merge')
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  merge(commonConfig , {
    entry:'./src/index.js',
    mode:'development',
    output: {
        filename:'main.js',
        path: path.resolve(__dirname , 'build')
    },
    module: {
        rules: [
          {
              test: /\.css$/,
              use:["style-loader","css-loader"]
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            // generator: {
            //     filename: 'static/[hash][ext][query]'
            // }
          },
        ]
      }
})