var http = require('http');
var fileSystem = require('fs');
http.createServer(function (req, res) {

    //readFile
    fileSystem.readFile('./asd.txt', function (err, data) {
        res.writeHead(200, { 'Content-type': 'text/plan' })
        res.write(data);

    })

    //append file
    //fileSystem.open('./asd.txt');
    fileSystem.appendFile('./asd.txt', 'text  added', function (err) {
        if (err) {
            throw err
        } else {

            console.log("append" + err)
        }

    })

    //write file 

    fileSystem.writeFile('./asd.txt', 'new data', function (err) {
        if (err) {
            throw err
        } else {

            console.log("append" + err)
        }

    })

}).listen(8081)