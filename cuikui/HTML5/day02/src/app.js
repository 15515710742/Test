//加载express模块,创建express对象
const express = require("express");
var app = express();
//绑定监听端口
app.listen(3000);
//指定代理静态目录
app.use(express.static(__dirname+"/public"));
//get /list  返回销售数据
app.get("/list",(req,res)=>{
    var obj = [
        {"label":"东里","value":50},
        {"label":"西里","value":50},
        {"label":"南里","value":110},
        {"label":"地铁口","value":0}
    ];
    res.send(obj);
})


