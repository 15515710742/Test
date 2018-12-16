//递归案例
//定义函数，传递数字计算阶乘
/*
function jie(n){
  var sum=1;
  for(var i=1;i<=n;i++){
    sum *= i;
  }
  return sum;
}
var res = jie(5);
console.log(res);
*/
//for循环计算阶乘
/*
var sum=1;
for(var i=1;i<=6;i++){
  sum *= i;
}
console.log(sum);
*/
/*
//用递归计算(1~n)的和
function getSum(n){
  //跳出条件
  if(n==1){
    return 1;
  }
  return n + getSum(n-1);
}
var res = getSum(100);
console.log(res);
*/
/*
//用递归计算阶乘
function jie(n){
  //跳出条件
  if(n==1){
    return 1;
  }
  return n*jie(n-1);
}
var res = jie(5);
console.log(res);
*/
//用递归计算兔子的数量
/*
function Number(n){
  if(n==1 || n==2){
    return 1;
  }
  return Number(n-1)+Number(n-2);
}
var res = Number(5);
console.log(res);
*/













