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
//get/sales  查询销售数据
//跨表查询的套路
//1.将查询表名保存FROM后面 FORM yaopin INNER JSON xiaoshou
//2.为表名起个别名 FORM yaopin y INNER JOIN xiaoshou x
//3.找两个表之间的关系 ON y.id = x.yid
app.get("/sales",(req,res)=>{
   var sql = "SELECT y.id,y.name,x.sales FROM yaopin y INNER JOIN xiaoshou x ON y.id = x.yid";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
});

app.get("/salesmonth",(req,res)=>{
    var id = parseInt(req.query.id);
    var sql = "SELECT y.id,y.name,x.sales,x.month FROM yaopin y INNER JOIN xiaoshou x ON y.id = x.yid WHERE y.id = 1";
     pool.query(sql,(err,result)=>{
         if(err) throw err;
         res.send(result);
     });
 });
 app.get("/salesyear",(req,res)=>{
    var sql = "SELECT sum(sales) as c,year FROM xiaoshou GROUP BY year";
     pool.query(sql,(err,result)=>{
         if(err) throw err;
         res.send(result);
     });
 });
  

