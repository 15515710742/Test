var b=10;
function fun(){
  console.log(b);
  var b=100;
  b++;
  console.log(b);
}
fun();
console.log(b);


// function fn(){//声明一个函数
//     console.log(1);
// }
var fn=function(){
    console.log(1);
}
fn();//2  1
// function fn(){//声明一个函数
//     console.log(2);
// }
var fn=function(){
    console.log(2);
}
fn();//2  2
var fn=100;
fn();//报错!类型错误

