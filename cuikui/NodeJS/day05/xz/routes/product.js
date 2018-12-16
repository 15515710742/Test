//商品路由器
const express = require('express');
//使用express路由器功能
var router = express.Router();
//使用到数据库连接
const pool = require('../pool.js');
//创建路由
router.get('/list',(req,res)=>{
//获取客户端传递的页码和每页大小
  var obj = req.query;
  var $page = obj.page;
  var $size = obj.size;
  $page = parseInt($page);
  $size = parseInt($size);
  if(!$page){
    $page = 1;
  }
  if(!$size){
    $size = 2;
  }
  var $begin = ($page-1)*$size;
  var sql= 'SELECT * FROM xz_laptop LIMIT ?,?';
  pool.query(sql,[$begin,$size],(err,result)=>{
    if(err) throw err;
    res.send(result);
  });
});
//创建路由
//1.添加商品
/*第一种方法
router.post('/add',(req,res)=>{
  var obj = req.body;
  var family_id = obj.family_id;
  var title = obj.title;
  var subtitle = obj.subtitle;
  var price = obj.price;
  var promise = obj.peomise;
  var spec = obj.spec;
  var lname = obj.lname;
  var os = obj.os;
  var memory = obj.memory;
  var resolution = obj.resolution;
  var video_card = obj.video_card;
  var cpu = obj.cpu;
  var video_memory = obj.video_memory;
  var category = obj.category;
  var disk = obj.disk;
  var details = obj.details;
  var shelf_time = obj.shelf_time;
  var sold_count = obj.sold_count;
  var is_onsale = obj.is_onsale;
  if(!title){
    res.send({code: '401',msg: 'title required'});
    return;
  }
  var sql = 'INSERT INTO xz_laptop VALUES(NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
  pool.query(sql,[family_id,title,subtitle,price,promise,spec,lname,os,memory,resolution,video_card,cpu,video_memory,category,disk,details,shelf_time,sold_count,is_onsale],(err,result)=>{
    if(err) throw err;
	if(result.affectedRows>0){
	  res.send({code: 200,msg: 'add success'});
	}
  });
});
*/
//第二种方法
router.post('/add',(req,res)=>{
  var obj = req.body;
  var i = 400;
  for(var key in obj){
    i++;
//    console.log(key+'--'+obj[key]);
	if(!obj[key]){
  //向客户端发送对象
      res.send({code:i,msg:key+' required'});
      return;
    }
  }
  obj.lid = null;
  var sql = 'INSERT INTO xz_laptop SET ?';
  pool.query(sql,[obj],(err,result)=>{
    if(err) throw err;
    console.log(result);  
  });
});
//添加路由
//2.删除
router.get('/delete',(req,res)=>{
  var obj = req.query;
  var $lid = obj.lid;
  if(!$lid){
    res.send({code: 401,msg: 'lid required'});
  }
  var sql = 'DELETE FROM xz_laptop WHERE lid=?';
  pool.query(sql,[$lid],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){	
	  res.send({code:200,msg: 'delete success'});
    }else{
	  res.send({code:301,msg: 'delete error'});
	}
  });
});
//3.商品检索




//导出路由
module.exports=router;







