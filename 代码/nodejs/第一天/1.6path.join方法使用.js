const path =require ('path');
const fs =require ('fs');
pathStr = path.join('/a','/b/c','../','d','e');
console.log(pathStr);
pathStr2 =path.join(__dirname,'/1.txt');
fs.readFile(pathStr2,'utf8',function(err,dataStr)
{
    if(err)
    {
        console.log("fail");
    }
    else
    {
        console.log("success"+dataStr);
    }
})