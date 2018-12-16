const express = require('express');
var app = express();
app.listen(3000,()=>{
});
/*
//中间件拦截特定的路由
app.use('/login',(req,res,next)=>{
  console.log('对登录进行了验证');
  next();
});

app.get('/login',(req,res,next)=>{
  res.send('login sucess');
});
app.get('/reg',(req,res,next)=>{
  res.send('reg success');
});
*/

//拦截特定路由
var counter = 0;
app.use('/user',(req,res,next)=>{
 //拦截请求，让访问量+1
 counter++;
  next();
});
//设定路由
app.get('/user',(req,res)=>{
  res.send(counter.toString());//不允许直接写数字
});

 




