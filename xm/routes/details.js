//引入所需要的express包
const express=require("express");
//引入连接池模块
const pool=require("../pool.js");
//使用express创建路由 
const router=express.Router();

//创建路由
//获取index_details.html中的内容
router.get("/",(req,res)=>{
    var pid = req.query.pid;
    var sql = `SELECT * FROM xm_details WHERE pid=?`;
    pool.query(sql,[pid],(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
});

router.get("/info",(req,res)=>{
    var pid = req.query.pid;
    var sql = `SELECT * FROM xm_details_info WHERE pid=?`;
    pool.query(sql,[pid],(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
});

//导出路由
module.exports=router;


