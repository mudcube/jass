# JCSS
#### Javascript in harmony with Stylus/SASS/SCSS/CSS

This is currently vaporware... Feel free to pitch in thoughts :)

## .jcss input

```js
// This is Stylus; it's the default context of JCSS:
background = black

// This is Javascript; dollar-bracket enters the Javascript context at any time:
${ // A newline after dollar-bracket enters the multiline Javascript context:
    import 'tinycolor' // You can perform ES6 imports.
    var color1 = `${'r'}${'e'}${'d'}` // You can use template strings or any other ES6 feature.
    var color2 = 'hsla(180, 100%, 42%, 1.0)'
    var foreground = tinycolor.mostReadable(background, [ color1, color2 ]) // Defined Stylus variables are available for your Javascript to access.
    return `
        // This returns SASS code & comments to be written inline.
        body 
            border: 7px solid ${foreground};
    `
}

body
    background: background // You can use Stylus variables.
    color: ${foreground} // You can use Javascript variables.
```

### .styl output
```js
background: black

body 
	border: 7px solid red;
	background: background;
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
