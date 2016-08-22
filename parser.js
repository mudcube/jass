function jcssParse(content) {
	var code = { js: [], sass: '' }
	var jsContent = ''
	var jsIndexes = []
	sassLoop: while (true) { // starts sass section
		var index = 0
		var sections = 1
		if (!(index = content.indexOf('${') + 1)) {
			code.sass += content
			break sassLoop;
		}
		code.sass += content.substr(0, index + 1)
		content = content.substr(index + 1)
		jsIndexes.push(code.sass.lastIndexOf('$'))
		jsContent = ''
		jsLoop: while (true) { // starts js section
			var indexes = []
			pushIndexOf(indexes, '{')
			pushIndexOf(indexes, '}')
			pushIndexOf(indexes, '`')
			pushIndexOf(indexes, '"')
			pushIndexOf(indexes, "'")
			if (indexes.length === 0) {
				break jsLoop
			}
			var min = Math.min.apply(null, indexes) // find symbol closest to index
			var symbol = content.substr(min, 1)
			switch(symbol) {
				case "'": // matches '"`"'
					jsConsume(/'.*(?!\\)?'/g, symbol)
					break
				case '`': // matches `"'`
					jsConsume(/`.*(?!\\)?`/g, symbol)
					break
				case '"': // matches "'`"
					jsConsume(/".*(?!\\)?"/g, symbol)
					break
				case '{': // start bracket section
					jsContent += content.substr(0, min + 1)
					content = content.substr(min + 1)
					sections ++
					break
				case '}':
					if (!--sections) { // ends js section
						jsContent += content.substr(0, min)
						content = content.substr(min)
						break jsLoop
					} else { // ends bracket section
						jsContent += content.substr(0, min + 1)
						content = content.substr(min + 1)
						break
					}
			}
		}
		code.js.push(jsContent)
	}

	// generate js eval
	var evalCode = `var $$vars = [];`
	var replacementOffset = 0
	jsIndexes.forEach((value, index) => {
		var content = code.js[index]
		if (content.includes('\n')) {
			evalCode += `\n$$vars.push(null);\n${content}`
		} else {
			evalCode += `\n$$vars.push(${content});\n`
		}
	})
	evalCode += `return $$vars;`
	evalCode  = `(function () { ${evalCode} })()`

	// replace js vars
	return replaceVars(code.sass, eval(evalCode))

	function replaceVars(out, vars) {
		vars.forEach((replacement, index) => {
			var start = jsIndexes[index] + replacementOffset
			var length = 3
			if (typeof replacement === 'string' || Number.isFinite(replacement)) {
				replacement = replacement
			} else {
				replacement = ``
			}
			out = replaceText(out, start, length, replacement)
			replacementOffset += replacement.length - length
		})
		return out
	}

	function replaceText(text, start, length, replacement) {
		return text.substr(0, start) + replacement + text.substr(start + length);
	}

	function pushIndexOf(indexes, symbol) {
		var index = content.indexOf(symbol)
		if (index > -1) indexes.push(index)
	}

	function jsConsume(regexp, symbol) {
		var match = content.match(regexp)
		if (match) {
			min += match.shift().length
			jsContent += content.substr(0, min)
			content = content.substr(min)
			return
		}
		throw new Error(`Failed to consume ${symbol}`)
	}
}

if (typeof module === 'object') {
	module.exports = jcssParse
}