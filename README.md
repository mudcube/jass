# JCSS
#### Javascript in harmony with SASS/SCSS

(This is a concept, just tinkering with the idea...)

## .jcss syntax

```js
// This is SASS; this is the default context:
$bgSelected: '#ff0000'

// This is Javascript; dollar-bracket enters the Javascript context at any time:
${
	import 'tinycolor' // you can import libraries using ES6
    var bg = `${'r'}${'e'}${'d'}` // just being silly with template strings
    var fg = 'blue'
}

// JS and SASS combined:
grid-item
    background: ${tinycolor.mostReadable('#000', [ bg, fg ])}

    &.selected 
        background: $bgSelected
```
