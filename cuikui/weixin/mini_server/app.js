//1:加载相应模块
const express = require("express");
const pool = require("./pool");
const qs = require("querystring");
//2:创建express服务器
var app = express();
app.use(express.static(__dirname+"/public"));
//3:绑定监听端口
app.listen(3000);
app.get("/imagelist",(req,res)=>{
    var sql = " SELECT * FROM xz_imagelist";   
    pool.query(sql,(err,result)=>{
         if(err)throw err;
         res.send(result);
    });
});
app.get("/message",(req,res)=>{
    var rows =[];   
	rows.push({title:"手机大促销",data:"2018-11-11",img_url:"http://127.0.0.1:3000/img/banner1.png",desc:"越努力,越费劲!"});		
	rows.push({title:"电脑大促销",data:"2018-11-11",img_url:"http://127.0.0.1:3000/img/banner2.png",desc:"越努力,越费劲!"});
	rows.push({title:"电视大促销",data:"2018-11-11",img_url:"http://127.0.0.1:3000/img/banner3.png",desc:"越努力,越费劲!"});
	rows.push({title:"pad大促销",data:"2018-11-11",img_url:"http://127.0.0.1:3000/img/banner4.png",desc:"越努力,越费劲!"});
res.send(rows);
});
app.get("/details",(req,res)=>{
    var pid = req.query.pid;
    var obj={
        pid:pid,
        title:"苹果",
        oldprice:1999.99,
        newprice:1111.11,
        info:"轻拿轻放!!!!!"
    }
    res.send(obj);
})

app.get("/product",(req,res)=>{
    var pno = req.query.pno;  
    var pageSize = req.query.pageSize;
    var sql = "SELECT count(id) as c FROM product";
    var process = 0;
    var obj = {pno:pno,pageSize:pageSize};
    pool.query(sql,(err,result)=>{
         if(err)throw err;
         var pageCount = Math.ceil(result[0].c/pageSize);
         obj.pageCount=pageCount;
         process+=50;
         if(process==100){
             res.send(obj);
         }       
    });
    var sql = "SELECT * FROM product LIMIT ?,?";
    var offset = parseInt((pno-1)*pageSize);
    pageSize =parseInt(pageSize);
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err)throw err;
        obj.data=result;
        process+=50;
        if(process==100){
            res.send(obj);
        } 
    });
});

app.post("/addUser",(req,res)=>{
    // var u = req.body.uname;
    // var p = req.body.upwd;
    req.on("data",(buff)=>{
        var obj = qs.parse(buff.toString());
        res.send(obj);
    });
})









