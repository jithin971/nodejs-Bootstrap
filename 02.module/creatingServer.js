var http = require('http');
var mytext = require('./myModule.js')

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/plan' })
    res.write("myname is"+mytext.myName())

    res.end('helloworld');
}).listen(8081)