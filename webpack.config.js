const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'editorjs-data-parser.js',
    library: 'editorjsparser',
    libraryExport: 'default',
    libraryTarget: 'umd'
  }, 
  module: {
    rules: [
    ]
  }
};