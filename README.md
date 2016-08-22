# JCSS
#### Javascript in harmony with SASS/SCSS

(This is a concept, just tinkering with the idea...)

## .jcss syntax

```js
// This is SASS; this is the default context:
$background: black

// This is Javascript; dollar-bracket enters the Javascript context at any time:
${ // an extra newline enters functional Javascript mode (otherwise the code is returned by default)
	import 'tinycolor' // you can import libraries using ES6
	var color1 = `${'r'}${'e'}${'d'}` // you can be silly with template strings
	var color2 = 'hsla(180, 100%, 50%, 1.0)'
	var foreground = tinycolor.mostReadable($background, [ color1, color2 ]) // defined SASS variables are available
	return ` // you can return SASS code which gets written inline
		body {
			border: 10px solid ${foreground};
		}
	`
}

// JS and SASS combined:
body
	background: $background // you can use SASS variables
	color: ${foreground} // you can use Javascript variables
```
