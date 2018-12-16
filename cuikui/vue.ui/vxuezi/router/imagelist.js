const express=require('express')
const pool=require("../pool.js")
const router=express.Router();


router.get("/list",(req,res)=>{
    var sql="SELECT id,img_url,title FROM xz_imagelist";
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:result});
    })
})
module.exports=router;