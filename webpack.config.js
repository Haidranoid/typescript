const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: process.env.NODE_ENV, // change to 'production' in production
    entry: './src/app.ts',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: "dist" // remove on production
    },
    devtool: 'inline-source-map',  // change to 'none' in production
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new CleanPlugin.CleanWebpackPlugin(),
    ]
}