//1.客户端全局对象
//2.在客户端，js文件中就是全局作用域
var a=1;
function fn(){
  return 123;
}
//使用全局对象调用
console.log(window.a);
console.log(window.fn());

console.log(123);//日志
console.info('hello');//消息
console.warn(456);//警告
console.error(789);//错误




