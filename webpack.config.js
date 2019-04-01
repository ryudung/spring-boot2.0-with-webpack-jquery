const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {

    let mode = env.NODE_ENV;

    return {
        mode: mode,
        devServer: {
            historyApiFallback: true,
            compress: true,
            publicPath: '/js',
            host: "localhost",
            port: 3000,
            proxy: {
                "**": "http://localhost:8080"
            }
        },
        devtool: 'inline-source-map',
        entry: './frontend/index.js',
        output: {
            path: path.resolve(__dirname, './src/main/resources/static/js/'),
            publicPath: '/js/',
            filename: 'bundle.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: true,
                template: './src/main/resources/templates/base/_base.ftl', //freemarker 파일을 사용
                filename: '../../templates/base/base.ftl',
                showErrors: true,
                hash: true
            })
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: path.join(__dirname),
                    exclude: /(node_modules)|(dist)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                }
            ]
        }
    }
};