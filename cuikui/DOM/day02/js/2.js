//1.查找触发事件的元素
//2.绑定事处理函数
//3.查找要修改的元素
//4.修改元素


    //1.查找触发事件的元素
var chbAll=document.querySelector("table>thead>tr>th:first-child>input");
    //2.绑定事件处理函数
chbAll.onclick=function(){
    var chbAll=this;
    //3.查找修改的元素
    var chbs=document.querySelectorAll("table>tbody>tr>td:first-child>input");
    //4.修改元素
    for(var chb of chbs){
        chb.checked=chbAll.checked;
    }
}
//1.查找触发事件的元素
//2.绑定事件处理函数
//3.查找要修改的元素
//4.修改元素


//查找触发事件的元素
var chbs=document.querySelectorAll("table>tbody>tr>td:first-child>input");
for(var chb of chbs){
    //绑定事件处理函数
    chb.onclick=function(){
        // 查找要修改的元素
        var chbAll=document.querySelector("table>thead>tr>th:first-child>input");
        //修改元素
        var unchecked=document.querySelector("table>tbody>tr>td:first-child>input:not(:checked)");
        if(unchecked!=null) chbAll.checked=false;
        else chbAll.checked=true;
    }
}








