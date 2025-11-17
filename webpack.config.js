const path = require("path");
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        use: "ts-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
    plugins: [new TsConfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "production",
  devtool: "inline-source-map",
};
