//引入项目所需要的包
const express = require('express');
//引入user路由器
const user = require('./routes/user.js');
const product = require('./routes/product.js');
const bodyParser = require('body-parser');
//1.使用express构建web服务器
//监听端口为3000。
var app = express();
app.listen(3000);
//2.托管静态资源
app.use(express.static('./static'));
//配置body-parser
app.use(bodyParser.urlencoded({
  extended:false
}));
//3.使用路由器管理所有用户模块下的路由
//挂载到user下,  /user/add/...
app.use('/user',user);
//把商品路由器挂载到product下 /product/add
app.use('/product',product);











