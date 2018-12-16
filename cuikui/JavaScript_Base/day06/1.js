//1.匿名函数
//把匿名函数放入到变量中，就相当于给匿名函数加了一个名称
//fn现在就是一个函数
/*
var fn = function (){
  console.log(123);
}
//调用函数
fn();
*/

//2.匿名函数用作回调函数
//要求：传递两个函数的名称
function getSum(num1,num2){
  return num1()+num2();//调用所传递的两个函数
}
//调用getSum
var res = getSum(getNum1,getNum2);
console.log(res);
var res2 = getSum(function(){return 3;},function(){return 4;});
console.log(res2);
//getSum();
function getNum1(){
  return 1;
}
function getNum2(){
  return 2;
}

//3.匿名函数的调用
/*
(function(){
  console.log(3);
})();
*/



