var http = require('http');
var url = require('url');


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/plan' })
    var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
    var q = url.parse(adr, true);
    console.log(q.host);
    console.log(q.pathname)
    console.log(q.search)
    var QData = q.query;
    console.log(QData.month)
    res.end('helloworld');
}).listen(8081)