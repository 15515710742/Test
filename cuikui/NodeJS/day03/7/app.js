//构建web服务器
const express = require('express');
var app = express();
app.listen(3000,()=>{
  console.log('创建成功');
});

//使用user路由器
const user = require('./routes/user.js');
//把路由器挂在到/user下
//  /user/list  /user
app.use('/user',user);


//使用product路由器
const product = require('./routes/product.js');
//把路由器挂在到product下
app.use('/product',product);






