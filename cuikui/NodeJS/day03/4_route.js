//构建web服务器
const express = require('express');
var app = express();
app.listen(3000,()=>{
  console.log('服务器创建成功');
});
//路由：获取路径为home的服务器资源
app.get('/home',(req,res)=>{
//响应的方法
//req请求的对象
//res响应的对象
  console.log('请求的方法为：'+req.method);
  console.log('请求的url：'+req.url);
  console.log('请求的头信息：'+req.headers);
  console.log('请求的查询字符串：'+req.query);
});
//路由：/list（获取商品列表）
app.get('/list',(req,res)=>{
//服务器响应的一句文本
//  res.send('this is list page');
//服务器响应的文件 __dirname
//文件需要使用绝对路径__dirname
 res.sendFile(__dirname+'/static/list.html');
//响应的重定向
//res.redirect('http://www.codeboy.com');
//res.redirect('/home');
});
//打开请求，自动跳转到list路径
app.get('/',(req,res)=>{
  res.redirect('/list');
});








