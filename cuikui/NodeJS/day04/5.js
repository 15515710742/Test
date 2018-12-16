//第三方中间件的使用
//引入express模块
const express = require('express');
const querystring = require('querystring');
//引入body-parser中间件
const bodyParser = require('body-parser');

var app = express();
app.listen(3000);
//托管静态资源
app.use(express.static('./static'));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
  extended:false //不使用querystring方式查询字符
}));
//使用body-parse中间件，来获取客户端使用post所传递的数据
app.post('/login',(req,res)=>{
//获取客户端的数据
//1.使用querystring模块 
  /*
  req.on('data',(buf)=>{
    var str = buf.toString();
     // console.log(str);
    console.log(querystring.parse(str));
  });
*/
//使用body-parse来解析数据
  console.log(req.body);//所获取的数据就是对象
});
//获取用户注册的数据
/*
app.post('/new',(req,res)=>{
  console.log(req.body);
});
*/

















