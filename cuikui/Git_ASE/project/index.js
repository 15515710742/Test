//使用node+Express创建web服务器;
//接收客户端http请求(req),输出http相应
const http = require('http');
const express = require('express');
const port =5050; //1~65535
var app = express();//运行express得到一个请求处理函数对象
var server = http.createServer(app);//创建web服务器
server.listen(port,()=>{   //启动服务器监听指定端口
  console.log('Server Listening on',port);
});
//针对客户端不同的请求,输出不同的响应消息
app.get('/',(req,res)=>{
    //向客户端输出指定内容
    res.send("welcome to cuikui homepage!!!!!!!!!!");
});