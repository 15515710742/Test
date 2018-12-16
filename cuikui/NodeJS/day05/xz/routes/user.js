//引入express
const express = require('express');
const pool = require('../pool.js');//导入连接数据库模块 ../ 上一级目录
//使用express路由功能
var router = express.Router();
//添加请求方法为post、url为add的路由
//1.用户注册
router.post('/add',(req,res)=>{
  var obj = req.body;
//对客户端所传递的用户名、密码、邮箱、手机数据进行验证 
  var $uname = obj.uname;
  if(!$uname){  //或者$uname==''
    res.send({code: '401',msg: 'uname required'});
//防止禁止程序继续执行
    return;
  }
  var $upwd = obj.upwd;
  if(!$upwd){
    res.send({code: '402',msg: 'upwd required'});
    return;
  }
  var $email = obj.email;
  if(!$email){
    res.send({code: '403',msg: 'email required'});
    return;
  }
  var $phone = obj.phone;
  if(!$phone){
    res.send({code: '404',msg: 'phone required'});
    return;
  }
//把数据插入到数据库中
  var sql = 'INSERT INTO xz_user VALUES(NULL,?,?,?,?,NULL,NULL,NULL)';
  pool.query(sql,[$uname,$upwd,$email,$phone],(err,result)=>{
    if(err) throw err;
//提示注册成功
    res.send({code: '200',msg:'register success'});
  })
});
//2.用户登录
router.post('/login',(req,res)=>{
  var obj = req.body;
  var $uname = obj.uname;
  if(!$uname){
    res.send({code: '401',msg: 'uname required'});
    return;
  }
  var $upwd = obj.upwd;
  if(!$upwd){
    res.send({code: '402',msg: 'upwd required'});
    return;
  }
//查询数据库中是否含有这条记录
//同时满足用户名$uname和密码$upwd
  var sql = 'SELECT * FROM xz_user WHERE uname=? AND upwd=?';
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(err) throw err;
//result  返回结果是数组
//如果数组的长度大于0，说明找到满足条件的记录
//否则数组的长度等于0，说明没有找到满足条件的记录
	if(result.length>0){
	  res.send({code: '200',msg: 'login success'});
	}else{
	  res.send({code: '301',msg: 'uname or upwd error'});
	}
  });
});
//3.删除用户
router.get('/delete',(req,res)=>{
  var obj = req.query;
  var $uid = obj.uid;
  if(!$uid){
	res.send({code:'401',msg: 'uid required'});
    return;
  }
//根据所传递的id来删除对应的数据 
  var sql = 'DELETE FROM xz_user WHERE uid=?';
  pool.query(sql,[$uid],(err,result)=>{
    if(err) throw err;
//判断是否删除成功  
    if(result.affectedRows>0){
	  res.send({code: '200',msg: 'delete success'});  
	}else{
	  res.send({code: '301',msg: 'delete error'});
	} 
  });
});
//4.用户检索
router.get('/query',(req,res)=>{
  var obj = req.query;
  var $uid = obj.uid;
  if(!$uid){
    res.send({code:'401',msg:'uid require'});
    return;
  }
//执行查询
//sql注入
  var sql = 'SELECT * FROM xz_user WHERE uid=?';
  pool.query(sql,[$uid],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
//把这个数据发送给客户端
	  res.send(result[0]);
	}else{
	  res.send({code:'301',msg: 'uid error'});
	}
  });
});
//5.用户修改(post)：编号(uid)姓名(user_name),性别(gender),邮箱(email),电话(phone)
router.post('/update',(req,res)=>{
  var obj = req.body;
  var $uid = obj.uid;
  if(!$uid){
    res.send({code:401,msg:'uid required'});
    return;
  }
  var $user_name=obj.user_name;
  if(!$user_name){
    res.send({code:402,msg:'$user_name required'});
    return;
  }
  var $gender=obj.gender;
  if(!$gender){
    res.send({code:403,msg:'$gender required'});
    return;
  }
  var $email=obj.email;
  if(!$email){ 
    res.send({code:404,msg:'$email required'});
    return;
  }
  var $phone=obj.phone;
  if(!$phone){
    res.send({code:405,msg:'$phone required'});
    return;
  }
  var sql = 'UPDATE xz_user SET user_name=?,gender=?,email=?,phone=? WHERE uid=?';
  pool.query(sql,[$user_name,$gender,$email,$phone,$uid],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
	  res.send({code:200,msg:'update success'});
	}else{
	  res.send({code:301,msg:'update error'});
	}
  });
});
//列出所有用户列表
router.get('/list',(req,res)=>{
  var obj = req.query; //页码 
  var $size = obj.size;//每页大小
  var $page =obj.page;
//把客户端传递的数据转换为整型
  $size = parseInt($size);
  $page = parseInt($page);
//如果为空，设置一个默认值 
  if(!$size){
    $size = 2;//分页大小为空，默认值为2
  }  
  if(!$page){
    $page = 1;//页码为空，默认值为第一页
  }
  var begin = ($page-1)*$size;
  var sql = 'SELECT * FROM xz_user LIMIT ?,?';
  pool.query(sql,[begin,$size],(err,result)=>{
    if(err) throw err;
	res.send(result);
//	console.log(result);
  });
});
//导出路由
module.exports = router;








