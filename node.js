var fs = require('fs')
var jcssParse = require('./parser')
var sass = jcssParse(fs.readFileSync('./test.jcss', 'utf8'))
console.log(sass)