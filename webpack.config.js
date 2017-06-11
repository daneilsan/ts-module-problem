var path = require("path");

module.exports = {
    context: path.resolve(__dirname),
    entry: "./src/App.ts",
    output: {
        filename: "./dist/webpack-bundle.js"
    },
    externals: {
        "abc": "abc"
    },
    resolve: {
        extensions: [".ts"]
        // alias: {
        //     "mierda": path.resolve(__dirname, "src/abc.d.ts")
        // }
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