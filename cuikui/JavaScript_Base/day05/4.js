//作用域
/*
var num1 =1;//全局变量
function fn(){
  var num2 =2;//局部变量
//在函数中访问num1
console.log(num1);
}
fn();
//在函数的外部访问函数中的变量num2
console.log(num2);
*/
/*
var num3=1;
function fn1(){
//全局变量可以在任何位置访问
//既然可以访问，同时就可以修改变量num3的值
//全局变量可以在任意位置修改
  num3 = 3;
}
fn1();
console.log(num3);

function fn2(){
//局部变量
// var num4 = 4;
//在局部不使用var来声明变量，自动是全局变量
  num4 = 5;//全局变量
}
fn2();
console.log(num4);
*/

//变量声明的提升
/*
function fn3(){
  console.log(a);
  var a=2;
  console.log(a);
}
fn3();
*/
//按值传递
var x=1;
function myfun(y){
  y++;
  console.log(y);
}
myfun(x);
console.log(x);







