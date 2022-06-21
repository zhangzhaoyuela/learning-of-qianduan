const fs = require ('fs');
// 1. 导入 fs 模块
// 2. 调用 fs.readFile() 读取文件的内容
fs.readFile('成绩.txt','utf8',function(err,dataStr)
{
      // 3. 判断是否读取成功
    if(err)
    {
        console.log('读取shiba');
    }
    else
    {
        //console.log("读取成功");
       
    }
   
  // 4.1 先把成绩的数据，按照空格进行分割
    // 4.2 循环分割后的数组，对每一项数据，进行字符串的替换操作
    // 4.3 把新数组中的每一项，进行合并，得到一个新的字符串
    const arrOld =dataStr.split(' ');
    const arrNew =[];
    arrOld.forEach(item =>{
        arrNew.push(item.replace('=',':'));
    })
    console.log(arrNew); 
    const newStr =arrNew.join('\r\n');
    console.log(newStr);
     // 5. 调用 fs.writeFile() 方法，把处理完毕的成绩，写入到新文件中
    fs.writeFile('成绩-ok.txt',newStr,'utf8',function(err)
    {
        if(err)
        {
            console.log("写入失败"+err);
        }
        else
        {
            console.log("写入成功");
        }
    })

})