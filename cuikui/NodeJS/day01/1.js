//NodeJS全局对象
//在脚本模式下，一个文件不是全局作用域
var a=1;
function fn(){
  return 123;
}
/*
console.log(a);
console.log(fn());
*/
console.log(global.a);//不能使用global，局部作用域。
console.log(global.fn());




