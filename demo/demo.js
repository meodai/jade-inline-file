var jade = require('jade');
var marked = require('marked');
var inlineFile = require('../helper-jade-inline-file')({
  md: marked,
});

var fs = require('fs');

console.log(
  jade.compile('div!= inline("../README.md")')({inline: inlineFile})
);
