const  http = require ('http');
const server = http.createServer();
server.on('request',function(req,res)
{
    console.log('someone visit');
})

server.listen(80,function(){
    console.log('127.0.0.1');
})