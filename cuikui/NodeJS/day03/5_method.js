//构建web服务器
const querystring = require('querystring');
const express = require('express');
var app = express();
app.listen(3000,()=>{
  console.log('服务器创建成功');
});
//路由
//客户端登录
app.get('/login',(req,res)=>{
//发送登录页面发送给客户端
  res.sendFile(__dirname+'/static/login.html');
});
//创建post,/member
app.post('/member',(req,res)=>{
//获取客户端发送的数据
  req.on('data',(buf)=>{
    //console.log(buf.toString());
    var body = buf.toString();//结果是查询字符串
    var person = querystring.parse(body);//结果是对象 
    //console.log(person);
    res.send('登录成功，欢迎'+person.uname);
  });
  
});





