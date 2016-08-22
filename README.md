# JCSS
#### Javascript in harmony with SASS/SCSS/CSS

This is currently vaporware... Feel free to pitch in thoughts :)

## .jcss input

```js
// This is SASS; it's the default context of JCSS:
$background: black

// This is Javascript; dollar-bracket enters the Javascript context at any time:
${ // A newline after dollar-bracket enters the multiline Javascript context:
	import 'tinycolor' // You can import libraries using ES6.
	var color1 = `${'r'}${'e'}${'d'}` // You can use template strings.
	var color2 = 'hsla(180, 100%, 42%, 1.0)'
	var foreground = tinycolor.mostReadable($background, [ color1, color2 ]) // You can use defined SASS variables in your Javascript.
	return `
		// This returns SASS code & comments to be written inline.
		body 
			border: 7px solid ${foreground};
	`
}

body
	background: $background // This is a SASS variable.
	color: ${foreground} // This is a Javascript variable.
```

### .sass output
```js
$background: black

body 
	border: 7px solid red;
	background: $background;
	color: red;
```

### .css output
```js
body {
	border: 7px solid red;
	background: black;
	color: red;
}
```
