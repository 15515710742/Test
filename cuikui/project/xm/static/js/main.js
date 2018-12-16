
$(function(){
    /*****引入头部的css文件和html代码片段****/
    $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
    /***请求头部的HTML代码片段***/
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(res){
            $(res).replaceAll("#head");
            /*****顶部二维码*****/            
            $("#d-img1").hide();
            $("#d-img2").hide();
            $("#d-img3").hide();
            var $a=$("#head>.container>div>div:first-child>a:nth-child(4)");
            $a.mousemove(function(){
                $(this).css("text-decoration","none");
                $("#d-img3").show();
            }).mouseout(function(){$("#d-img3").hide();}); 

            $a.parent().next().children("a:nth-child(4)").mousemove(function(){
                $("#d-img1").show();
            }).mouseout(function(){
                $("#d-img1").hide();
            }).next().mousemove(function(){
                $("#d-img2").show();
            }).mouseout(function(){
                $("#d-img2").hide();
            })             
              
            /*****搜索框部分******/
            var $btn=$("#top>.container .button");
            var $input=$btn.prev();
            $btn.click(function(){
                location.href=`http://127.0.0.1:3000/index_details.html?kw=${$input.val().trim()}`;
            });
            $input.keyup(function(e){
                if(e.keyCode==13)
                    $btn.click();
            })
            if(location.search.indexOf("kw=")!=-1){
                var kw=decodeURI(location.search.split("=")[1]);
                $input.val(kw);
            }

            /****下拉菜单1****/
            $("#menu1")
            .mouseover(function(){
                $("#menu1>.dropdown-menu").show()
            })			
            .mouseout(function(){
                $("#menu1>.dropdown-menu").hide()
            });

            /****下拉菜单2****/
            $("#menu2")
            .mouseover(function(){
                $("#menu2>.dropdown-menu").show();
            })		
            .mouseout(function(){
                $("#menu2>.dropdown-menu").hide()
            });

            /***导航栏固定***/           
                /*$(window).scroll(function(){
                    var scrollLen=$(window).scrollTop();
                    if(scrollLen>0){
                        $("#head").addClass("fixed");
                    }else{
                        $("#head").removeClass("fixed")
                    }
                }) */           
        }
    });

    /***第二层内容***/
    var $h1=$("#demo2 div:nth-child(2)>div>h4:first-child");
    var $h2=$h1.next();
    var $h3=$h2.next();
    $h1.mousemove(function(){
        $h1.addClass("my_bg1").siblings().removeClass("my_bg1")
        $h1.parent().next().children(":first").removeClass("none").siblings().addClass("none");
    });
    $h2.mousemove(function(){
        $h2.addClass("my_bg1").siblings().removeClass("my_bg1")
        $h2.parent().next().children(":nth-child(2)").removeClass("none").siblings().addClass("none");
    });
    $h3.mousemove(function(){
        $h3.addClass("my_bg1").siblings().removeClass("my_bg1")
        $h3.parent().next().children(":last").removeClass("none").siblings().addClass("none");
    })

    /*中间轮播图*/
    $(document).ready(function(){
        var settime=null;//定义定时器
        var height=$(".slider li").height();//图片的高度
        var index=0;//图片索引
        var len=$(".slider li").length;
        //图片移动方法
        function show(index){
            $(".slider").animate({top:-height*index},'slow');
            $(".num li").removeClass("on").eq(index).addClass("on");
            
        }
        //鼠标悬停事件
        $(".slider").hover(function(){
            clearInterval(settime);//鼠标滑入清除定时器
        },function(){
            settime=setInterval(function(){
                show(index);
                index++;
                if(index==len){
                    index=0;
                }
            },2000)
        }).trigger("mouseleave");
        //鼠标放在小数字上
        $(".num li").mouseover(function(){//鼠标放在数字上的方法
            index=$(".num li").index(this);//值为当前的li的索引
            $(".num li").css("cursor","pointer");
            show(index);
            clearInterval(settime);
        })

    })

    /*底部旅游产品分类*/
    $("ul>li>div").hide();    
    $("#demo5>div>div>ul>li:nth-child(2)").mousemove(function(){
        $(this).prev().css("border-bottom","2px solid #0099ff");
        $(this).parent().css("border-right","0");
        $(this).css("border-bottom","2px solid #0099ff").siblings().css("border-right","2px solid #0099ff");
        $(this).parent().parent().parent().next().hide();
                
        $("ul>li>div.li1").show();
        $("ul>li>div.li1").addClass("one");
    }).mouseout(function(){
        $("ul>li>div.li1").hide();

        $(this).parent().parent().parent().next().show();
        $(this).parent().css("border-right","2px solid #0099ff");
        $(this).prev().css("border-bottom","1px dashed #b7b7b7");
        $(this).css("border-bottom","1px dashed #b7b7b7").siblings().css("border-right","0")
    })

    $("#demo5>div>div>ul>li:nth-child(3)").mousemove(function(){
        $(this).prev().css("border-bottom","2px solid #0099ff");
        $(this).parent().css("border-right","0");
        $(this).parent().parent().parent().next().hide();
        $(this).css("border-bottom","2px solid #0099ff").siblings().css("border-right","2px solid #0099ff");

        $("ul>li>div.li2").show();
        $("ul>li>div.li2").addClass("one");
    }).mouseout(function(){
        $("ul>li>div.li2").hide();

        $(this).parent().parent().parent().next().show();
        $(this).parent().css("border-right","2px solid #0099ff");
        $(this).prev().css("border-bottom","1px dashed #b7b7b7");
        $(this).css("border-bottom","1px dashed #b7b7b7").siblings().css("border-right","0")
    })

    /***在线客服部分*****/
    $(window).scroll(function () { //在线客服跟随滚动
        var scrollTop = $(window).scrollTop();
        $('.service').stop().animate({top: scrollTop/18+200});
    });
    $('.service .box1 span').click(function () { //在线客服左侧隐藏(关闭)
        $('.service').animate({ width: '0', right: '0' }, 300);
        $('.service').hide(300);
    });
    
     /*****返回顶部*****/
        $('.toTop').click(function(){
            $('html,body').animate({scrollTop:0},'slow');//慢慢回到页面顶部
        });
        $(window).scroll(function(){
            if($(this).scrollTop() < 300) {//当window的垂直滚动条距顶部距离小于300时
                $('.toTop,.message').fadeOut('slow');//toTop,message按钮淡出

            } else {
                $('.toTop,.message').fadeIn('slow');//反之按钮淡入
            }
        });
        
    /*****引入底部的css文件和html代码片段****/
    $(`<link rel="stylesheet" href="css/footer.css">`).appendTo("head");
    $.ajax({
        url:"footer.html",
        type:"get",
        success:function(res){
            $(res).replaceAll(".bottom");
        }
    });   
})










