'use strict';

var fs = require('fs');

// stores the avalible modifiers
var modifiers = {};

// main render function
var renderfile = function(path, options) {
  var fileCache = {};
  var options = options || {};
  var encoding = options.hasOwnProperty('encoding') ? options.encoding : 'utf8';

  // don't read the file again if cached already
  if (!fileCache.hasOwnProperty(path)) {
    try {
      var fileEnding = path.split('.').pop();
      if (fileEnding && modifiers.hasOwnProperty(fileEnding)) {
        fileCache[path] = modifiers[fileEnding](fs.readFileSync(path, encoding));
      } else {
        fileCache[path] = fs.readFileSync(path, encoding);
      }
    } catch (error) {
      console.log('jade inline helper error:', error);
    }
  }

  return fileCache[path];
};

module.exports = function(mods) {
  modifiers = mods;
  return renderfile;
};
