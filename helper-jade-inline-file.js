'use strict';

var fs = require('fs');

module.exports = function (path) {
  var fileCache = {};

  if(!fileCache.hasOwnProperty(path)) {
    try {
      fileCache[path] = fs.readFileSync(path);
    } catch (error) {
      console.log('jade inline helper error:', error);
    }
  }

  return fileCache[path];
};
