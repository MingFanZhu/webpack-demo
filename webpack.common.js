const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */
const config = {
    entry: {
        main1: './src/起步/index.js',
        main2: './src/管理资源/index.js',
        main3: './src/管理输出/index.js'
    },
    output: {
        clean: true,
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/起步/index.html',
            filename: '1.起步.html',
            chunks: ['main1']
        }),
        new HtmlWebpackPlugin({
            template: 'src/管理资源/index.html',
            filename: '2.管理资源.html',
            chunks: ['main2']
        }),
        new HtmlWebpackPlugin({
            template: 'src/管理输出/index.html',
            filename: '3.管理输出.html',
            chunks: ['main3']
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
};

module.exports = config;