const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.post("/signin",(req,res)=>{
  var {uname,upwd}=req.body;
  var sql="select * from xz_user where uname=? and upwd=?";
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err) console.log(err);
    res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Control-Allow-Origin":"*"}) 
    console.log(result);
    if(result.length>0)      
      res.write(JSON.stringify({ok:1}))
    else
      res.write(JSON.stringify({ok:1,msg:"用户名或密码错误"}))
    res.end();         
  })
})

module.exports=router;