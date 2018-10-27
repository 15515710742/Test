//引入所需要的包express
const express = require('express');
//导入连接数据库模块
const pool = require('../pool.js');
//使用express路由功能
var router = express.Router();
//创建路由

//1.新用户注册,先验证用户名是否能用,可以使用在进行注册
router.get('/checkUname',(req,res)=>{
  var $uname=req.query.uname;
  if(!$uname){
    res.send("用户名不能为空");
    return;
  }
  var sql='SELECT * FROM xm_user WHERE uname=?';
  pool.query(sql,[$uname],(err,result)=>{
     if(err) throw error;
     if(result.length>0){
       res.send("1");//用户名已经存在
     }else{
       res.send("0");//用户名可用
     }
  });
});

//开始新用户注册验证
router.post('/register',(req,res)=>{
  var $uname=req.body.uname;
  if(!$uname){
    res.send("用户昵称不能空");
	return;
  }
  var $upwd=req.body.upwd;
  if(!$upwd){
    res.send("密码不能为空");
	return;
  }
  var $email=req.body.email;
  if(!$email){
    res.send("邮箱不能为空");
	return;
  }
  var $phone=req.body.phone;
  if(!$phone){
    res.send("电话不能为空");
	return;
  }
  var $user_name=req.body.user_name;
  if(!$user_name){
    res.send("真实姓名不能为空");
	return;
  }
  var $gender=req.body.gender;
 if(!$gender){
   res.send("性别不能为空");
   return;
 }
  var sql='INSERT INTO xm_user VALUES(NULL,?,?,?,?,NULL,?,?)';
  pool.query(sql,[$uname,$upwd,$email,$phone,$user_name,$gender],(err,result)=>{
    if(err) throw error;
    res.send("注册成功");
  });
});
//2.用户登录
router.post('/login',(req,res)=>{
  var $uname=req.body.uname;
  if(!$uname){
    res.send("用户名不存在");
    return;
  }
  var $upwd=req.body.upwd;
  if(!$upwd){
    res.send("用户密码不存在");
    return;
  }
  var sql = 'SELECT * FROM xm_user WHERE uname=? AND upwd=?';
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(err) throw error;
    if(result.length>0){
      res.send("登录成功");
    }else{
      res.send("用户名或密码错误");
    }
  });
});
//导出路由
module.exports=router;









