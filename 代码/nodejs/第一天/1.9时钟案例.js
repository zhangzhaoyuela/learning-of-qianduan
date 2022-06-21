 const fs =require('fs');
 const path =require('path');
 // 1.1 导入 fs 模块
 // 1.2 导入 path 模块
 // 1.3 定义正则表达式，分别匹配 <style></style> 和 <script></script> 标签
 const regStyle =/<style>[\s\S]*<\/style>/;
 const regScript =/<script>[\s\S]*<\/script>/;
// 2.1 调用 fs.readFile() 方法读取文件
 fs.readFile(path.join(__dirname,'/index.html'),'utf8',function(err,dataStr){
     // 2.2 读取 HTML 文件失败
    if(err) return console.log("fail"+err);
    // 2.3 读取文件成功后，调用对应的三个方法，分别拆解出 css, js, html 文件
    resolveCSS(dataStr);
    resolevJS(dataStr);
    resolveHTML(dataStr);
 })
// 3.1 定义处理 css 样式的方法
 function resolveCSS(data)
 {
    const r1 = regStyle.exec(data);//exec 提取正则，索引为0这项就是需要的文本
   // console.log(r1);
// 3.2 使用正则提取需要的内容
   const  r = r1[0].replace('<style>','').replace('</style>','');
   // console.log(r);
    // 3.3 将提取出来的样式字符串，进行字符串的 replace 替换操作
    // 3.4 调用 fs.writeFile() 方法，将提取的样式，写入到 clock 目录中 index.css 的文件里面
    fs.writeFile(path.join(__dirname,'/clock/index.css'),r,function(err)
    {
       // if(err) return ("写入失败"+err);

    })
 }
// 4.1 定义处理 js 脚本的方法
 function resolevJS(data)
 {
      // 4.2 通过正则，提取对应的 <script></script> 标签内容
    const r1 =regScript.exec(data);
      // 4.3 将提取出来的内容，做进一步的处理
    const r = r1[0].replace("<script>","").replace("</script>","");
   // console.log(r);
   // 4.4 将处理的结果，写入到 clock 目录中的 index.js 文件里面
    fs.writeFile(path.join(__dirname+'/clock/index.js'),r,function(err)
    {
        if (err){
            console.log("fail"+err);
        }
    })
 }
// 5.1 定义处理 HTML 结构的方法
 function resolveHTML(data)
 {
    // 5.2 将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签
   data= data.replace(regStyle,'<link rel="stylesheet" href="./index.css"></link>').replace(regScript,'<script src ="./index.js"></script>');
   // 5.3 写入 index.html 这个文件
    fs.writeFile(path.join(__dirname+'/clock/index.html'),data,'utf8',function(err)
    {
       if(err)
       {
        return console.log('fail'+err);
       }
       
    })
 }