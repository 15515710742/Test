//1.查找触发事件元素
//2.绑定事件处理函数
//3.查找修改的元素
//4.修改元素


//1.查找触发事件的元素
var spans=document.querySelectorAll("ul.tree>li>span");
//2.绑定事件处理函数
for(var span of spans){
    span.onclick=function(){
        var span=this;
        //2种
        //1.如果当前span的class为open
        if(span.className=="open"){
            span.className="";//就关闭当前菜单
            //2.如果当前span没有class
        }else{
            //查找现在打开的菜单
            var open=document.querySelector("ul.tree>li>span.open");
        
        //如果找到先关闭
        if(open!=null) open.className="";
        span.className="open";//在打开自己
        }
    }
}