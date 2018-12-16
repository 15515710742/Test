
$(function(){
    if(location.search.indexOf("pid=")!=-1){
        var pid=location.search.split("=")[1] 
        $.ajax({
            url:"http://127.0.0.1:3000/details",
            type:"get",
            data:`pid=${pid}`,
            dataType:"json",
            success:function(res){
                var $div = $(".container>div:nth-child(2)>div>div:nth-child(1)");
                var html =`<h3>${res[0].title}</h3>`;
                $div.html(html);
                var data = res[0].src_lg.split(",");               
                var $el = $("#img-lg>div");
                var html=`<ul class="list-unstyled">
                    <li><img src="${data[0]}" class="w-100"></li>
                    <li class="d-none"><img src="${data[1]}" class="w-100"></li>
                    <li class="d-none"><img src="${data[2]}" class="w-100"></li>
                    <li class="d-none"><img src="${data[3]}" class="w-100"></li>
                    <li class="d-none"><img src="${data[4]}" class="w-100"></li>
                    <li class="d-none"><img src="${data[5]}" class="w-100"></li>
                    <li class="d-none"><img src="${data[6]}" class="w-100"></li>
                </ul>`;
                $el.html(html);
                var pic = res[0].src_sm.split(",");            
                var $ul = $("#small>div>ul");
                var html=``;
                for(var i=0;i<pic.length;i++){
                    html += `<li><img src="${pic[i]}"></li>`; 
                }                                                                                                  
                $ul.html(html);
                /***点击小图片切换为相应的大图片***/
                var $lis1=$("#img-lg>div>ul>li");
                var $lis2=$("#small>div>ul>li");
                for(var i=0;i<$lis2.length;i++){
                    (function(j){
                            $($lis2[j]).click(function(){
                                $($lis1[j]).removeClass("d-none").siblings().addClass("d-none");
                            });
                    })(i);
                }
            }
        });
        $.ajax({
            url:"http://127.0.0.1:3000/details/info/",
            type:"get",
            data:`pid=${pid}`,
            dataType:"json",
            success:function(res){
                var $div = $(".container>#text>div");
                $div.html(res[0].content);
            }
        });
    
    }
});