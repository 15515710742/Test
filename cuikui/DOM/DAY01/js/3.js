//所有DOM操作的固定操作步骤
//1.查找所有触发事件的元素
//2.为每个元素绑定事件处理函数
//3.查找要修改元素 

//1.查找table中所有button元素 
var table=document.getElementById("data");
var btns=table.getElementsByTagName("button");
console.log(btns);//6个
//2.遍历每个按钮
for(var btn of btns){
    btn.onclick=function(){
        //捷径:this-->
        var btn=this;
        //3.查找要修改的元素
        var span=btn.parentNode.children[1];   
        //4.修改元素
        var n=parseInt(span.innerHTML);
        if(btn==span.nextElementSibling)
          n++;
        else if(n>1)
          n--;
          span.innerHTML=n;
//3. 查找要修改的元素
        var td=btn.parentNode.nextElementSibling;
//4.修改元素
        var price=parseFloat(btn.parentNode.previousElementSibling.innerHTML.slice(1));
        var sub=price*n;
        td.innerHTML=`￥${sub.toFixed(2)}`;
    //查找修改的元素
         var tdTotal=table.querySelector("tfoot>tr>td:last-child");
    //修改元素
        var tds=table.querySelectorAll("tbody>tr>td:last-child");
        var total=0;
        for(var td of tds){
            total+=parseFloat(td.innerHTML.slice(1));
        }
        tdTotal.innerHTML=`￥${total.toFixed(2)}`;       
    }
    //当点击按钮时btn.onclick()//this-->当前btn
}











