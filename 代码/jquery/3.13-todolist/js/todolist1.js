$(function()
{
    load();
    $('#title').on('keydown',function(event)
    {
        if(event.keyCode ===13)
        {
            if($(this).val()==="")
            {

            }
            else{
                        var local =getDate();
            //console.log(local);
            local.push({title:$(this).val(),done:false});
            saveDate(local);
            load();
            $(this).val("");   
            }

        }
        
    });
    $('ol,ul').on('click','a',function()
    {
        var data =getDate();
        var index =$(this).attr('id'); //attr可以获取自定义属性
        console.log(index);
        data.splice (index ,1);//splice(从哪个位置开始删除, 删除几个元素)
        saveDate(data);
        load();

    })
    // $("ol, ul").on("click", "input", function() {
    //      //alert(11);
    //     // 先获取本地存储的数据
    //     var data = getDate();
    //     // 修改数据
    //     var index = $(this).siblings("a").attr("id");
    //     console.log(index);
    //     // data[?].done = ?
    //     data[index].done = $(this).prop("checked");
    //     console.log(data);

    //     // 保存到本地存储
    //     saveDate(data);
    //     // 重新渲染页面
    //     load();
    // });
    $('ol,ul').on('click','input',function()
    {
        var data =getDate();
        console.log(data);
        var index = $(this).siblings("a").attr("id");
        //var index = $(this).siblings("a").attr("id");
        console.log(index);
        data[index].done =$(this).prop('checked');//固有属性的获取是prop
        console.log(data[index].done);
        saveDate(data);
        load();
    })
    function getDate()
    {
        var data =localStorage.getItem("todolist");
        if(data!== null)
        {
            return JSON.parse(data);
        }
        else
        {
            return [];
        }
    }
    function saveDate(data)
    {
        localStorage.setItem("todolist",JSON.stringify(data));
    }
    function load()
    {
        var todoCount =0;
        var doneCount =0;
        var data = getDate();
        $('ol').empty();
        $('ul').empty();
        $.each(data,function(i,n)
        {
           // $("ol").prepend("<li><input type='checkbox' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
            // $('ol').prepend('<li><input type="checkbox"><p>'+n.title+'</p> <a href="javascript:;id='+i+'"></a></li>')
            //console.log(n);内容
            if(n.done ===false)
            {
                $('ol').prepend('<li><input type="checkbox" ><p>'+n.title+'</p> <a href="javascript:;" id='+i+'></a></li>');
                todoCount++;
                
            }
            else
            {
                $('ul').prepend('<li><input type="checkbox" checked="checked"><p>'+n.title+'</p> <a href="javascript:;" id='+i+'></a></li>');
                doneCount++;
            }

        })
        $('#todocount').text(todoCount);
        $('#donecount').text(doneCount);

    }
})