var http = require('http');

function myFirstfunction(callback){
setTimeout(function(){
console.log("myFirstfunction")
callback();
},1000)
    
}

function mysecondfunction(){

    console.log("mysecondfunctionkjsdaflkbsdkljfbsdakjfbaksdjhbasdkjbksdj")
}
myFirstfunction(function(){
mysecondfunction()
})

