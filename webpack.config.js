var path = require("path");

module.exports = {
    context: path.resolve(__dirname),
    entry: "./src/App.ts",
    output: {
        filename: "./dist/webpack-bundle.js"
    },
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    }
};