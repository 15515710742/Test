//商品的搜索模块
const express=require("express");
const pool=require("../pool.js");
const router=express.Router();

router.get("/list",(req,res)=>{
//1:参数 pno pageSize key[关键词]
//2:sql SELECT id ,lname,price FROM xz_laptop WHERE lname LIKE '%小%' SELECT count(id) as c
    var {pno,pageSize,key} = req.body;
    if(!pno){pno=1}           
    if(!pageSize){pageSize=5} 
    var sql = "SELECT id,lname,price FROM xz_laptop WHERE lname LIKE '%小%'";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(rsult);
    })
});

//去东哥xz_laptop 商品表导出导入
//导出路由对象
module.exports=router;


