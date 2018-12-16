const express=require('express');
const pool=require('../pool.js');
const router=express.Router();
//1.
router.post('/login',(req,res)=>{
  var $uname=req.body.uname;
  var $upwd=req.body.upwd;
  if(!$uname){
    res.send({code:401,msg:'用户名称不存在'});
	return;
  }
  if(!$upwd){
    res.send({code:402,msg:'用户名密码不存在'});
	return;
  }
  var sql='SELECT * FROM xz_user WHERE uname=? AND upwd=?';
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(err) throw error;
	if(result.length>0){
	  res.send('登录成功');
	}else{
	  res.send('用户名或密码错误');
	}
  });
});
//2.
router.get('/list',(req,res)=>{
  var sql = 'SELECT * FROM xz_user';
  pool.query(sql,(err,result)=>{
    if(err) throw error;
    res.send(result);
  });
});


module.exports=router;




