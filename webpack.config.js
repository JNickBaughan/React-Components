const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/frontend/index.ts",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
