const path = require('path');
var glob = require('glob');

module.exports = {
  entry: "./public/js/scripts.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/dist')
  }
};