const http =require('http');
const fs = require('fs');
const path = require('path');

const server =http.createServer();
server.on('request',(req,res)=>{
    const url = req.url;
    let fpath ='';
   // const fpath = path.join(__dirname,url);
    if(url ==='/')
        fpath = path.join(__dirname,'/clock/index.html'); 
    else
    {
        fpath =path.join(__dirname,'/clock',url);
    }
    fs.readFile(fpath,'utf8',function(err,dataStr)
    {
        if(err)
        {
            return res.end('404');
        }
        res.end(dataStr);

    })
})

server.listen(80,()=>{
    console.log('http://127.0.0.1');
})