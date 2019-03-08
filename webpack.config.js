const path = require('path');
module.exports = [
  {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'index.js',     
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
},
{
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname),
      filename: 'index.preact.js',     
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
    resolve: {
      alias: {
        // Support React Native Web
        // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
        'react-native': 'react-native-web',
        'react':'preact-compat',
        'react-dom': 'preact-compat',
      },
    }
}
];