var http = require('http');
var fileSystem = require('fs');

//
var buf = new Buffer(10);
var buf = new Buffer([10, 20, 30, 40, 50]);
var buf = new Buffer("Simply Easy Learning", "utf-8");





http.createServer(function (req, res) {
buf = new Buffer(26);
    //readFile
    fileSystem.readFile('./asd.txt', function (err, data) {
        res.writeHead(200, { 'Content-type': 'text/plan' })
buf=data
        console.log(buf.toString('ascii',0,5))
        res.write(buf);

    })

    //append file
    //fileSystem.open('./asd.txt');
    

}).listen(8081)