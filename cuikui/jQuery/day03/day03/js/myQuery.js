//自定义创建的jQuery API

jQuery.fn.sum=function(){
    //this-->$("ul>li")
    var $elems=this;
    var sum=0;
    for(var elem of $elems){
        sum+=parseFloat(elem.innerHTML)
    }
    return sum;
}
//$("ul>li").sum();

