var http=require('http');
var uc=require('upper-case');

http.createServer(function(req,res){
   res.writeHead(200,{'Content-type':'text/plan'})
console.log("hihi")

    res.end(uc('helloworld'));
}).listen(8080)