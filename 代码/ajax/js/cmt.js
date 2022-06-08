function getCommentList(){
$.ajax(
{
method:"GET",
url:'http://www.liulongbin.top:3006/api/cmtlist',
data:{},
success:function (res){
    if(res.status !== 200) return alert("获取评论失败");
    var rows =[];
    $.each(res.data, function(i,item){
        var str='<li class="list-group-item"><span class="badge" style="background-color:yellow;">评论时间:'+item.time+'</span> <span class="badge" style="background-color:blue;">评论人:'+item.username+'</span>'+item.content+'</li>';
        rows.push(str);
        //console.log(str);
        $('#cmt-list').empty().append(rows.join(''));
    })
}
});
}
getCommentList();

$(function(){
    $('#formAddCmt').submit(function(e)
    {
        e.preventDefault();
        var data =$(this).serialize();
        console.log(data);
        $.post('http://www.liulongbin.top:3006/api/addcmt',data,function(res){
            if(res.status !=201) {return alert('发表评论失败!');}
        });
        getCommentList();
        //Jquery对象转换为DOM对象调用[0]
       
        $('#formAddCmt')[0].reset();//这样可以重置表单
    })
})