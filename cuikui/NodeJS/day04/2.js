const express = require('express');
var app = express();
app.listen(3000,()=>{

  console.log('服务器创建成功');
});
//使用中间件
//路由前：前置中间件
function fn(req,res,next){
  console.log('中间件1执行了');
  //执行完后，next让下一步继续执行
  next();
}
app.use(fn);
//路由
app.get('/list',(req,res,next)=>{
  res.send('this is list page');
  next();
});
app.get('/detail',(req,res,next)=>{
  res.send('this is detail page');
  next();
});
//后置中间件
app.use((req,res)=>{
  console.log('中间件2执行了');
});








