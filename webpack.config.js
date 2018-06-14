const webpack = require('webpack');

module.exports = {
    entry: {
        main: [__dirname + '/src/js/main']
    },
    output: {
        path: __dirname +  '/public',
        publicPath: '/',
        filename: '[name].js'
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                }
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
            'variables': __dirname + '/src/js/variables'
        }
    }
}