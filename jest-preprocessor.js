var babelJest = require('babel-jest');
module.exports = {
  process: function(src, filename) {
    if (filename.match(/\.[js|jsx]/)) {
      return babelJest.process(src, filename);
    }
    return '';
  }
};