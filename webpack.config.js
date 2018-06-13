const webpack = require('webpack');

module.exports = {
    entry: {
        main: ['webpack-dev-server/client', 'webpack/hot/dev-server', __dirname + '/src/js/main']
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
        inline: false,
        hot: true,
        contentBase: './public'
    }
}