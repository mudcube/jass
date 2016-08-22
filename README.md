# JCSS
#### Javascript in harmony with SASS/SCSS

(This is a concept, just tinkering with the idea...)

## .jcss syntax

```js
// This is SASS; this is the default context:
$background: black

// This is Javascript; dollar-bracket enters the Javascript context at any time:
${
	import 'tinycolor' // you can import libraries using ES6
	var color1 = `${'r'}${'e'}${'d'}` // just being silly with template strings
	var color2 = 'blue'
	var foreground = tinycolor.mostReadable($background, [ color1, color2 ]) // SASS variables are available in JS
	return ` // you can return SASS code which gets written inline
		body {
			border: 10px solid ${foreground};
		}
	`
}

// JS and SASS combined:
body
	background: $background // refer to a SASS variable
	color: ${foreground} // refer to Javascript variable
```
