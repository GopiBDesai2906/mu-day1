var http=require('http');
var a=10;
var b=20;
var c=a+b;
var msg =`A is ${a}<br/> b is ${b}<br/> c is ${c}`;

http.createServer(function(req,res)
{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(msg);
}).listen(3000);
console.log("Server is started http://127.0.0.1:3000")
