// const Asciidoctor = require('asciidoctor')

const asciidoctor = Asciidoctor()





// var doc = asciidoctor.convertFile('./Asciidoctor_test/03_body.adoc', { to_file: false, standalone: true })

var html = asciidoctor.convert('Hello, _Asciidoctor_')
console.log(html)

document.getElementById("target_ascii").innerHTML=html;
//