const path = require("path");
const include = path.resolve(__dirname, "../");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx/,
        loader: "babel-loader!ts-loader",
        exclude: /node_modules/,
        include
      }
    ]
  }
};
