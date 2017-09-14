var http = require('http');
var mongo = require('mongodb');


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/firstdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("Employees", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { name: "jithin", address: "kannur" ,phone:123123};
  db.collection("employees").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("employees").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});