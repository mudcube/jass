# JASS
#### Javascript in harmony with SASS/SCSS

(This is a concept, just tinkering with the idea...)

## .jass input

```js
// This is SASS; it's the default context of JASS:
$background: black

// This is Javascript; dollar-bracket enters the Javascript context at any time:
${ // An extra newline enters functional Javascript mode, otherwise the value is treated as a variable.
	import 'tinycolor' // You can import libraries using ES6.
	var color1 = `${'r'}${'e'}${'d'}` // You can use template strings.
	var color2 = 'hsla(180, 100%, 42%, 1.0)'
	var foreground = tinycolor.mostReadable($background, [ color1, color2 ]) // You can use defined SASS variables in your Javascript.
	return ` // This returns SASS code & comments to be written inline.
		body {
			border: 10px solid ${foreground};
		}
	`
}

body
	background: $background // This is a SASS variable.
	color: ${foreground} // This is a Javascript variable.
```

### .css output
```js
body {
	border: 10px solid red;
	background: black;
	color: red;
}
```
