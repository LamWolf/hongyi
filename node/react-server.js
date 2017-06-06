let http = require('http')
let fs = require('fs')

let documentRoot = '../'

let srever = http.createServer(function (req, res) {
	let url = req.url

	let file = documentRoot + url
	console.log(url)

	fs.readFile(file, function(err, data) {
		if(err) {
			res.writeHeader(404, {
				'Content-Type': 'text/html;charset = "utf-8"'
			})
			res.write('<h1>404错误</h1><p>你要找的页不存在</p>')
			res.end();
		}else {
			res.writeHeader(200, {
				'Content-Type': 'text/html;charset = "utf-8"'
			})
			res.write(data)
			res.end()
		}
	})
}).listen(8080)
console.log('Server running at http://localhost:8080/react.html')