//创建web服务器
const express = require('express');
//引入body-parser中间件
const bodyParser = require('body-parser');
//引入MySQL模块
const mysql = require('mysql');

var app = express();
app.listen(3000,()=>{
  console.log('success');
});
//使用连接池连接
var pool = mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  password:'',
  database:'tedu',
  connectionLimit:10
});
//托管静态资源到static目录下。
app.use(express.static('./static'));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
  extended:false //不使用querystring提供的解析
}));
//使用body-parser中间件获取客户端post所传递的数据
//路由，添加数据到服务器。
app.post('/dept',(req,res)=>{
//使用body-parser解析数据
  console.log(req.body);
  var deptObj = req.body;
  pool.query(`INSERT INTO dept SET ?`,deptObj,(err,result)=>{
    if(err) throw err;
    res.send('add success');//向客户端发送成功的消息
	console.log(result);
  });

});













