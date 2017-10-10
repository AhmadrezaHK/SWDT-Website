let webpack = require('webpack');
let path = require('path');

let BUILD_DIR = path.resolve(__dirname, 'src/public');
let APP_DIR = path.resolve(__dirname, 'src/app/jsx');
let JS_DIR = path.resolve(__dirname, 'src/app/js');
let ENTRY = [
                    JS_DIR + '/what-input.js',
                    JS_DIR + '/foundation.min.js',
                    APP_DIR + '/index.jsx'
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
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                include:APP_DIR + '/img'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        })
    ]
    // ,watch:true
};