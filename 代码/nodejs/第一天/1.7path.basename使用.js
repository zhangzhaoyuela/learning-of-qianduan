const  path =require('path');
const fpath ='a/b/c/index.html';
// const fullName = path.basename(fpath);
// console.log(fullName);
const fullName = path.basename(fpath,'.html');
console.log(fullName);