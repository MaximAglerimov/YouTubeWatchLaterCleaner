const path = require("path");

module.exports = {
  entry: "./src/console-script.ts",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    // This makes the main function available globally
    library: {
      name: "WatchLaterCleaner",
      type: "var",
      export: "default",
    },
  },
};
