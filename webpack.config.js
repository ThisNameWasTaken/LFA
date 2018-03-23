const path = require('path');

module.exports = {
    entry: './src/js/main.js',

    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'main.js'
    },

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },

    devtool: 'source-map'
};