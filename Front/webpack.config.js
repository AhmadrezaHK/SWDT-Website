let webpack = require('webpack');
let path = require('path');
let WatchIgnorePlugin = require('watch-ignore-webpack-plugin');

let BUILD_DIR = path.resolve(__dirname, 'src/public');
let APP_DIR = path.resolve(__dirname, 'src/app/jsx');
let JS_DIR = path.resolve(__dirname, 'src/app/js');
let ENTRY = [
                    JS_DIR + '/what-input.js',
                    JS_DIR + '/foundation.min.js',
                    APP_DIR + '/container.jsx'
            ];

module.exports = {
    entry: ENTRY,
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(png|jpg|ttf|woff|woff2|eot|svg)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        }),
        new WatchIgnorePlugin([
            path.resolve(__dirname, 'node_modules/'),
            path.resolve(__dirname, 'src/app/js/')
        ])
    ]/*,
    watch:true,*/
/*    watchOptions: {
        aggregateTimeout: 300,
        poll:1000
    }*/
};