//使用http模块创建web服务器
const http = require('http');
//1.创建服务器
var server = http.createServer();
//监听端口的变化
server.listen(3000,()=>{
  console.log('创建服务器成功');
});
//2.接受客户端的请求
server.on('request',(req,res)=>{
//req请求的对象
//res响应的对象
  console.log('接收到一个http请求');
 // console.log(req);//好多信息
//  console.log(res);//好多null

console.log('请求的方法为：'+req.method);//默认就是get
console.log('请求的url：'+req.url);//端口后面的字符串
console.log('请求的头信息：'+req.headers);
});













