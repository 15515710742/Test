//内置中间件
//让客户端自动获取服务器资源
const express = require('express');
var app = express();
app.listen(3000,()=>{
  console.log('服务器创建成功');
});
//让客户端自动获取服务器资源
//把静态资源托管到具体目录下
app.use(express.static('./static'));
app.use(express.static('./public'));
