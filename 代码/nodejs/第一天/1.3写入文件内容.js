const fs = require('fs');

fs.writeFile('2.txt','hello','utf-8',function(err)
{
  if(err) return console.log("失败"+err);
  else return  console.log("成功");
    //console.log(err);
})

// 2. 调用 fs.writeFile() 方法，写入文件的内容
//    参数1：表示文件的存放路径
//    参数2：表示要写入的内容
//    参数3：回调函数
  // 2.1 如果文件写入成功，则 err 的值等于 null
  // 2.2 如果文件写入失败，则 err 的值等于一个 错误对象