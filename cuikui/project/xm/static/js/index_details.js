/*
$(function(){
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:3000/index_details/",
        success:function(res){
            console.log(res.slice(0,3))
            var $parent = $(".container>div:nth-child(2)");
            var html=``;
            for(var data of res.slice(0,3)){
                var {pid,title,href,src} = data;
                html += `<div class="col-lg-3 p-0 pr-1 position-relative">
                        <a href="${href}" title="${title}"><img src="${src}" class="w-100 h-100"/></a>
                        <p class="display" title="靖西鹅泉田园之歌">靖西鹅泉田园之歌</p>                           
                    </div>`;
            }
            $parent.html(html);
        }
    });
})
*/
$(function(){
    var $a = $(".container #row1 div a");
    var $p = $a.children(":nth-child(2)");
    $p.hide();
    $a.mouseover(function(){
        $(this).children(":nth-child(2)").show();        
    }).mouseout(function(){
        $(this).children(":nth-child(2)").hide();
    });

    var $a = $(".container #row2 div a");
    var $p = $a.children(":nth-child(2)");
    $p.hide();
    $a.mouseover(function(){
        $(this).children(":nth-child(2)").show();        
    }).mouseout(function(){
        $(this).children(":nth-child(2)").hide();
    });

    var $a = $(".container #row3 div a");
    var $p = $a.children(":nth-child(2)");
    $p.hide();
    $a.mouseover(function(){
        $(this).children(":nth-child(2)").show();        
    }).mouseout(function(){
        $(this).children(":nth-child(2)").hide();
    });
});









