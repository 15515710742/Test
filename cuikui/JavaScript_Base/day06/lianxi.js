//使用递归函数计算斐波那切数列第n项
function fib(n){
//如何写递归
//跳出条件，当n是1，或者n是2，返回1
  if(n==1 || n==2){
    return 1;
  }
  return fib(n-1) + fib(n-2);

}
var res = fib(10);
console.log(res);










