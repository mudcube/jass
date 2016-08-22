var fs = require('fs')
var jassParse = require('./parser')
var sass = jassParse(fs.readFileSync('./test.jcss', 'utf8'))
console.log(sass)