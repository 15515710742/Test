const express = require('express');

var router = express.Router();

var pool = require('../pool.js');
//1.ajax-demo
router.get('/ajaxDemo',(req,res)=>{
  res.send('这是我的第一个ajax程序!');

});
//2.练习
router.get('/myAjax',(req,res)=>{
  res.send('这是我的第一个AJAX练习');
});
//get带参数
router.get('/login',(req,res)=>{
 //获取用户名称
  var $uname=req.query.uname;
  var $upwd=req.query.upwd;
  if(!$uname){  
    res.send('用户名不存在');
    return;
  }
  if(!$upwd){
    res.send('密码不能为空');
    return;
  }
  //res.send("用户名:"+$uname+"密码:"+$upwd); 
  //将用户名和密码作为参数取数据库查询
  var sql='SELECT * FROM xz_user WHERE uname=? and upwd=?';
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(result.length>0){
      res.send('登录成功');	
	}else{
	  res.send('用户名或密码错误');
	}
  });
});
//获取用户表所有数据
router.get('/userlist',(req,res)=>{
  var sql ='SELECT * FROM xz_user';
  pool.query(sql,[],(err,result)=>{
	res.send(result);	 

  });
});





//导出路由
module.exports=router;





