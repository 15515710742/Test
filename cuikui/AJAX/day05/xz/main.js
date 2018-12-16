//引入项目所需要的包
//核心模块
const express = require('express');
//使用中间件
const bodyParser = require('body-parser');
//用户自定义模块
//引入user,product,demo,myPro路由器
const user = require('./routes/user.js');
const product = require('./routes/product.js');
const demo=require('./routes/demo.js');
const myPro=require('./routes/myPro.js');
//1.使用express构建web服务器
//监听端口为3000。
var app = express();
app.listen(3000);
//2.托管静态资源
app.use(express.static('./static'));
app.use(express.static('./myExercise'));
app.use(express.static('./myPro'));
//配置body-parser
app.use(bodyParser.urlencoded({
  extended:false
}));
//3.使用路由器管理所有用户模块下的路由
//挂载到user下,  /user/add/...
app.use('/user',user);
//把商品路由挂载到product下 /product/add
app.use('/product',product);
//测试案例demo路由挂载
app.use('/demo',demo);
//项目myPro路由挂载
app.use('/myPro',myPro);








