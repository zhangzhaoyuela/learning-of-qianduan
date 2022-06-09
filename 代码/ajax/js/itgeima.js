function resolveData(data){
    var arr = [];
    for (var k in data){
        var str = k + '='+data[k];
        arr.push(str);
    } 
    //console.log(arr.join('&'));
    return arr.join('&');
   
}
function itheima(options)
{
    var xhr =new XMLHttpRequest();
    var qs = resolveData(options.data);
    //console.log(qs);
    if(options.method.toUpperCase() ==='GET')
    {
        console.log(options.method,options.url +'?'+qs);
        xhr.open(options.method,options.url +'?'+qs);
        xhr.send();
    }
    else if(options.method.toUpperCase() ==='POST')
    {
        xhr.open(options.method,options.url);
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.send(qs);
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status ===200)
        {
            var result = JSON.parse(xhr.responseText);
            console.log(result);
            options.success(result);
        }
    }
}
