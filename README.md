# jade-inline-file
jade helper that outputs whatever textbased file (html, xml, svg etc..) as a string

## Usage in Node / Gulp / Grunt

```
jadeInline = require('jade-inline-file')();
```

### Make use of loaders
```
marked = require('marked');
jadeInline = require('jade-inline-file')({
    md: marked
});
/* files ending with *.md will be parsed with marked before returned */
```

make sure to pass the function to your jade data.

```javascript
jade.compile('string of jade', { globals: { helpers: {inline: jadeInline} }});
```
## Inside a jade file
```
!= helpers.inline('somefile.svg')
```
