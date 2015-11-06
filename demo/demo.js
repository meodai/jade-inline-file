var jade = require('jade');
var marked = require('marked');
var inlineFile = require('../node-file-to-string')({
  md: marked,
});

var sass = require('node-sass');
var fs = require('fs');

console.log('jade',
  jade.compile('div!= inline("../README.md")')({inline: inlineFile})
);

console.log('sass',
  sass.renderSync({
    data: '.icon { background-image: #{icon("icon.svg")}; }',
    functions: {
      'icon($url)': function(url) {
        var file = inlineFile(url.getValue());
        return new sass.types.String('url("data:image/svg+xml;utf8,' + file + '")');
      },
    },
  }).css.toString('utf8')
);
