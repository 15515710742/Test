//使用express构建web服务器
const express = require('express');
//导入路由器
const product = require('./routes/product.js');
var app = express();//创建服务器
app.listen(3000,()=>{
  console.log('服务器创建成功');
});
//使用路由器，在商品下
//挂在到product下面
app.use('/product',product);
















