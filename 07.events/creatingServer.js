var http = require('http');
var events = require('events');
var eventEmitter = new events.EventEmitter();

var myFun = function () {
    console.log("fun1 start now");
}

var myFun2 = function () {
    console.log("fun2 start now");
}

eventEmitter.on("serverOn", myFun);
eventEmitter.addListener("serverOn", myFun2)

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/plan' })
    eventEmitter.emit("serverOn");
    eventEmitter.removeListener("serverOn", myFun)
    eventEmitter.emit("serverOn");
    res.end('helloworld');
}).listen(8081)