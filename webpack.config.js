const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');

// Default settings
const defaultConfig = {
    entry: {
        'main': './src/main.browser.ts'
    },

    output: {
        publicPath: '',
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve(__dirname, 'node_modules')]
    },

    devServer: {
        //Errors and Warnings shown on full page
        overlay: {
            warnings: true,
            errors: true
        },
        //GZip compression
        compress: true,
        historyApiFallback: true,
        watchOptions: {aggregateTimeout: 300, poll: 1000},
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },

    node: {
        global: true,
        crypto: 'empty',
        __dirname: true,
        __filename: true,
        process: true,
        Buffer: false,
        clearImmediate: false,
        setImmediate: false
    }
};

const config = {

    plugins: [
        new webpack.DefinePlugin({
            DEVELOPMENT: true,
            PRODUCTION: true
        })
    ],
    module: {
        loaders: [
            // .ts files for TypeScript
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {test: /\.ts$/, loaders: ['awesome-typescript-loader']},
            {test: /\.css$/, loaders: ['style-loader', 'to-string-loader', 'css-loader']},
            {test: /\.html$/, loader: 'raw-loader'},
            {test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader?name=fonts/[name].[ext]'}
        ]
    }

};

module.exports = webpackMerge(defaultConfig, config);
