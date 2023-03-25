const path = require("path");
module.exports = {
  mode: "development",
  target: "node",
  entry: "./src/server/index.ts",
  output: {
    path: path.resolve("dist"),
    filename: "bundle-server.js",
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
