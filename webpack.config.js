const path = require("path");
// const webpack = require("webpack");

module.exports = (env, args) => {
  console.log(env, args);
  return [reactConfig(env, args), backwardsCompatConfig];
};

const reactConfig = (env, args) => {

  return {
    devtool: args.mode === 'production'? false : 'eval-cheap-source-map',
    entry: "./src/react/index.js",
    output: {
      path: path.resolve(__dirname),
      filename:
        args.mode === "production"
          ? "dist/react/index.js"
          : "dist/react/index.dev.js",
      library: "substateConnect",
      libraryTarget: "umd",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
  };
};

const backwardsCompatConfig = {
  entry: "./src/react/index.js",
  output: {
    path: path.resolve(__dirname),
    filename: "dist/index.js",
    library: "substateConnect",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
};
