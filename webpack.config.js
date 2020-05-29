const path = require('path');


const reactConfig = {
  entry: './src/react/index.js',
  output: {
      path: path.resolve(__dirname),
      filename: 'dist/react/index.js',     
      library: 'substateConnect',
      libraryTarget: 'umd'
  },
  module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        }
      ]
    },
};


const backwardsCompatConfig = {
  entry: './src/react/index.js',
  output: {
      path: path.resolve(__dirname),
      filename: 'dist/index.js',     
      library: 'substateConnect',
      libraryTarget: 'umd'
  },
  module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        }
      ]
    },
};


module.exports = [reactConfig, backwardsCompatConfig];
