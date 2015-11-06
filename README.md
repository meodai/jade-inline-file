# node-file-to-string
node helper that outputs whatever file (html, xml, svg etc..) as a string. Using a cache, and automatic transformers by file-type

## Installation
```
npm install node-file-to-string --save
```

## Usage

### Usage in Node / Gulp / Grunt

```javascript
jadeInline = require('node-file-to-string')();
```

#### Make use of transformers
```javascript
marked = require('marked');
jadeInline = require('node-file-to-string')({
    md: marked
});
/* files ending with *.md will be parsed with marked before returned */
```

make sure to pass the function to your jade data.

```javascript
jade.compile('string of jade', { globals: { helpers: {inline: jadeInline} }});
```

### Inside a jade file
```javascript
!= helpers.inline('somefile.svg')
```
