// TS -> WebPack see https://webpack.js.org/guides/typescript/

const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

const rootDir = path.resolve(__dirname, ".");
const appMain = rootDir + "/src/app/main.ts";
const distDir = rootDir + "/../../public/scripts";

module.exports = {
    context: rootDir, // a base directory to resolve the "entry"
    entry: {
        "bundle": appMain
    },
    output: {
        path: distDir,
        filename: "[name].js" // [name] means we are going to use the "key" value of each entry as the bundle file name
    },
    module: {
        rules: [ 
            // DEMO1: add ts-loader
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /(node_modules|tmp)/
            }
        ]
    },
    resolve: {
        // DEMO1: add extensions to be crawled
        extensions: [ '.js', '.ts' ],
        alias: {
            'handlebars': 'handlebars/dist/handlebars.js'
        },
    },
    optimization: {
        // DEMO1: add minimizer
        minimize: false,
        minimizer: [new TerserPlugin()],
      },
    mode: "production"
};
