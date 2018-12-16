const express=require('express');
const pool=require('../pool.js');
const router=express.Router();
//1.登录
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
//2.查询用户列表,并响应给前端
router.get('/list',(req,res)=>{
  var sql = 'SELECT * FROM xz_user';
  pool.query(sql,(err,result)=>{
    if(err) throw error;
    res.send(result);
  });
});

//3.删除
router.get('/deleteUser',(req,res)=>{
  var $uid=req.query.uid;
  if(!$uid){
    res.send('uid不存在');
	return;
  }
  var sql = 'DELETE FROM xz_user WHERE uid=?'; 
  pool.query(sql,[$uid],(err,result)=>{
    if(err) throw error;
    res.send("1");//1表示删除成功
  }); 
});
//4.查询用户信息
router.get('/query',(req,res)=>{
  var $uid=req.query.uid;
  if(!$uid){
    res.send('用户uid不存在');
    return;
  }
  var sql = 'SELECT * FROM xz_user WHERE uid=?';
  pool.query(sql,[$uid],(err,result)=>{
    if(err) throw error;
    if(result.length>0){
	  res.send(result[0]);
    }else{
	  res.send('没查询出用户信息');
	}
  });
});
//5.修改用户信息
router.post('/update',(req,res)=>{
  var obj=req.body;
  var $uid=obj.uid;
  if(!$uid){
    res.send('用户uid不存在');
	return;
  }
  var $uname=obj.uname;
  if(!$uname){
    res.send('用户姓名不存在');
	return;
  }
  var $upwd=obj.upwd;
  if(!$upwd){
    res.send('用户密码不存在');
	return;
  }
  var $email=obj.email;
  if(!$email){
    res.send('用户邮箱不存在');
	return;
  }
  var $phone=obj.phone;
  if(!$phone){
    res.send('用户电话不存在');
	return;
  }
  var $user_name=obj.user_name;
  if(!$user_name){
    res.send('用户真实姓名不存在');
	return;
  }
  var $gender=obj.gender;
  if(!$gender){
    res.send('用户性别不详');
	return;
  }
  var sql ='UPDATE xz_user SET uname=?,upwd=?,email=?,phone=?,user_name=?,gender=? WHERE uid=?';
  pool.query(sql,[$uname,$upwd,$email,$phone,$user_name,$gender,$uid],(err,result)=>{
    if(err) throw error;
    res.send("<script>alert('修改成功!');location.href='http://localhost:3000/02-list.html'</script>");	
  });
});
//验证用户名称是否存在
router.get('/checkUname',(req,res)=>{
  var $uname=req.query.uname;
  if(!$uname){
    res.send('用户姓名不能为空');
	return;
  }
  var sql ='SELECT * FROM xz_user WHERE uname=?';
  pool.query(sql,[$uname],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send('1');//用户名已存在
    }else{
	  res.send('0');//用户名可用
	}
  });
});
//用户可用,再进行注册
router.post('/register',(req,res)=>{
  //开始验证
  var $uname=req.body.uname;
  if(!$uname){
    res.send('用户名称不能为空');
    return;
  }
  var $upwd=req.body.upwd;
  if(!$upwd){
    res.send('用户密码不能为空');
	return;
  }
  var $email=req.body.email;
  if(!$email){
    res.send('用户邮箱不能为空');
	return;
  }
  var $phone=req.body.phone;
  if(!$phone){
    res.send('用户电话不能为空');
	return;
  }
  var $user_name=req.body.user_name;
  if(!$user_name){
    res.send('真实姓名不能为空');
	return;
  }
  var $gender=req.body.gender;
  if(!$gender){
    res.send('用户性别不能为空');
	return;
  }
  var sql = 'INSERT INTO xz_user VALUES(NULL,?,?,?,?,NULL,?,?)';
  pool.query(sql,[$uname,$upwd,$email,$phone,$user_name,$gender],(err,result)=>{
    if(err) throw err;
	res.send('注册成功');
  });
});



//导出路由
module.exports=router;



