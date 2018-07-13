const webpack = require("webpack");
const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './compiled/app/initEditor.js'],
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    optimization: {
        minimize: true
    }
};