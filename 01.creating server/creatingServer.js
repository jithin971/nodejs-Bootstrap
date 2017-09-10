var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/plan' })
    console.log("hihi")

    res.end('helloworld');
}).listen(8080)