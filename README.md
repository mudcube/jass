# JASS
#### Javascript in harmony with SASS/SCSS

(This is a concept, just tinkering with the idea...)

## .jass syntax

```js
// This is SASS; it's the default context:
$background: black

// This is Javascript; dollar-bracket enters the Javascript context at any time:
${ // An extra newline enters functional Javascript mode, otherwise the value of the code is returned by default.
	import 'tinycolor' // You can import libraries using ES6.
	var color1 = `${'r'}${'e'}${'d'}` // You can be silly with template strings.
	var color2 = 'hsla(180, 100%, 42%, 1.0)'
	var foreground = tinycolor.mostReadable($background, [ color1, color2 ]) // You can use defined SASS variables in your Javascript.
	return ` // You can return SASS code & comments to be written inline.
		body {
			border: 10px solid ${foreground};
		}
	`
}

// JS & SASS in harmony:
body
	background: $background // You can use SASS variables.
	color: ${foreground} // You can use Javascript variables.
```

### .css output
```js
body {
	border: 10px solid red;
	background: black;
	color: red;
}
```
