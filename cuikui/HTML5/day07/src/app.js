//加载express模块,创建express对象
const express = require("express");
const mysql = require("mysql");
var pool=mysql.createPool({
    host:"127.0.0.1",//连接mysql数据库地址
    user:"root",     //连接mysql用户名
    password:"",
    database:"web1806",
    port:3306,         //端口号默认
    connectionLimit:10 //连接池10 活动连接

});
var app = express();
//绑定监听端口
app.listen(3000);
//指定代理静态目录
app.use(express.static(__dirname+"/public"));

app.get("/sales1",(req,res)=>{
  var obj = {"鞋":200,"衬衫":20,"羊毛衫":19,"运动鞋":1}
  res.send(obj);
});

  

