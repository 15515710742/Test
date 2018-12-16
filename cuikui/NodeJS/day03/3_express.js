//使用express构建服务器
//1.基于http的，让express作为请求处理的函数
const express = require('express');
//const http = require('http');
//var app = express();
/*
var server = http.createServer(app);
server.listen(3000,()=>{
  console.log('服务器创建成功');
});
*/
/*简化
http.createServer(app).listen(3000,()=>{
  console.log('服务为创建成功');
});
*/
//2.直接使用express构建web服务器
var app = express();
app.listen(3000,()=>{
  console.log('服务器创建成功');
});






