const fs =require ('fs');
// fs.readFile('./1.txt','utf8',function(err,dataStr)
// {
//     if(err)
//     {
//         console.log('ddd');
//     }
//     else 
//     console.log(dataStr);
// })
// 出现路径拼接错误的问题，是因为提供了 ./ 或 ../ 开头的相对路径
// 如果要解决这个问题，可以直接提供一个完整的文件存放路径就行


// fs.readFile('E:\\qianduan\\learning-of-qianduan\\代码\\nodejs\\第一天\\1.txt','utf8',function(err,dataStr)
// {
//     if(err)
//     {
//         console.log('ddd');
//     }
//     else 
//     console.log(dataStr);
// })
//移植差，不利于维护
// __dirname 表示当前文件所处的目录
// console.log(__dirname)

fs.readFile(__dirname+'/1.txt','utf8',function(err,dataStr)
{
    if(err)
    {
        console.log('ddd');
    }
    else 
    console.log(dataStr);
})