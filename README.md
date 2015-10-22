# jade-inline-file
jade helper that outputs whatever textbased file (html, xml, svg etc..) as a string

# Usage in Node / Gulp / Grunt
```
jadeInline = require('jade-inline-file');
```

#Inside a jade file
```
!= jadeInline('somefile.svg')
```
