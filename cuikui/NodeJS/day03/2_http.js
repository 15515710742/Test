//引入http模块
const http = require('http');
//1.创建服务器
var server = http.createServer();
//监听3000端口
server.listen(3000,()=>{
  console.log('创建服务器成功');
});
//2.接受客户端请求
server.on('request',(req,res)=>{
  console.log('接收到一个http请求');
//服务器端做出响应
//设置响应的头信息
 /*
  res.writeHead(200,{
    'Server':'web1806',
    'Content-Type':'text/html'
  });
//响应到浏览器中——响应的主体
  res.write('this is web1806 server');
  */
  //重定向到其他的url
  res.writeHead(301,{
    'Location':'http://www.tmooc.cn' 
  });
  //结束响应
//将响应的消息发给客户端
 
  res.end();

});




