var http=require('http');
const { listenerCount } = require('process');

http.createServer(function(req,res)
{
    res.end("Welcome to node js");
}
).listen(3000);
console.log("Server is started http://127.0.0.1:3000")