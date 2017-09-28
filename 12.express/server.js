var express = require('express');
var app = express()
bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/', function (req, res) {
    //console.log(__dirname)
})
var obj = [{ empNo: "10", EmpName: "jithin", Empage: 10 }, { empNo: "20", EmpName: "asd", Empage: 10 }, { empNo: "30", EmpName: "rah", Empage: 10 }]
app.get('/employee', function (req, res) {

    res.end(JSON.stringify(obj))

})

app.get('/employee/:id', function (req, res) {

    myid=req.params.id;
    obj.forEach(function (element) {
       if(element.empNo==myid){
         
           res.end(JSON.stringify(element))

       }

    }, this);

res.end("notfound")
})
app.post('/employee', urlencodedParser, function (req, res) {
    console.log("params", req.body)
    obj.push(req.body)
    res.end("done")

})

var server = app.listen(8081, function (req, res) {
    var host = server.address().address
    var port = server.address()

    console.log("Example app listening at", host, port)
})