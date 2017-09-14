console.log(__filename);
console.log(__dirname);

setTimeout(function(){
    console.log("asd")
},1000)
var t=setInterval(function(){
    console.log("aSD")
    clearInterval(t);
},2000)