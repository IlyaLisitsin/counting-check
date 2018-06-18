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
                    { loader: 'sass-loader' }
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
        contentBase: './public'
    },
    resolve: {
        alias: {
            'js': __dirname + '/src/js',
            'variables': __dirname + '/src/js/variables',
            'event-listeners': __dirname + '/src/js/event-listeners',
            'dom-generators': __dirname + '/src/js/dom-generators'
        },
        extensions: ['.scss', '.js']
    }
}