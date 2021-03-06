const webpack = require('webpack');

module.exports = {
    entry: {
        'main.js': __dirname + '/src/js/main',
        'main-style.css': __dirname + '/src/styles/main.scss'
    },
    output: {
        path: __dirname +  '/public',
        publicPath: '/',
        filename: '[name]'
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'main.css'
                        }
                    },
                    { loader: 'extract-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['./node_modules']
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimize: false
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin,
    ],
    devServer: {
        contentBase: './public',
        port: 3000,
        open: true,
        proxy: {
            "/api": "http://localhost:8080"
        }
    },
    resolve: {
        alias: {
            'js': __dirname + '/src/js',
            'variables': __dirname + '/src/js/variables',
            'event-listeners': __dirname + '/src/js/event-listeners',
            'dom-generators': __dirname + '/src/js/dom-generators',
            'group': __dirname + '/src/js/group',
            'good': __dirname + '/src/js/good',
            'header': __dirname + '/src/js/header',
            'mdc': __dirname + '/src/styles/mdc'
        },
        extensions: ['.scss', '.js']
    }
}