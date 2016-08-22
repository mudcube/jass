# JCSS
#### Javascript in harmony with Stylus/SASS/SCSS/CSS

*This is currently vaporware... Feel free to pitch in thoughts :)*

* .jstyl for Javascript in Stylus
* .jsass for Javascript in SASS
* .jscss for Javascript in SCSS
* .jcss for Javascript in CSS

## .jstyl example

```js
// This is Stylus; it's the default context in a .jstyl:
background = black

// This is Javascript; dollar-bracket enters the Javascript:
${
    import 'tinycolor' // You can perform ES6 imports.
    var color1 = `${'r'}${'e'}${'d'}` // You can use template strings or any other ES6 feature.
    var color2 = 'hsla(180, 100%, 42%, 1.0)'
    var foreground = tinycolor.mostReadable(background, [ color1, color2 ]) // Stylus variables are available to Javascript.
    return `
        // This returns SASS code & comments to be written inline.
        body 
            border: 7px solid ${foreground};
    `
}

// This is Stylus again:
body
    background: background // You can reference Stylus variables.
    color: ${foreground} // You can reference Javascript variables too!
```

### .styl output
```js
background = black

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
