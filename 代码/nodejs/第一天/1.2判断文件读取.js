 const fs =require ('fs')

 fs.readFile('1.txt','utf-8',function(err,dataStr)
 {
    if(err)
    {
        return console.log('读取文件失败'+err.message);
    }
    console.log("chengg"+dataStr);
 })