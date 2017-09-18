var express=require('express');
var app=express()
	bodyParser = require('body-parser')
    var jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/',function(req,res){
//console.log(__dirname)
})

app.get('/employee',function(req,res){
    var obj=[{asd:"jhvj"},{asd:"jhvj"}]
    res.end(JSON.stringify(obj))

})
app.post('/employee',urlencodedParser,function(req,res){
    console.log("params",req.body)
    res.end("JSON.stringify(obj)")

})

var server=app.listen(8081,function(req,res){
var host = server.address().address
   var port = server.address()
   
   console.log("Example app listening at", host, port)
})