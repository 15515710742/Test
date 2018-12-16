//商品路由器
const express = require('express');
//使用路由器
var router = express.Router();//返回对象
//添加路由
router.get('/add',(req,res)=>{
//req.method/url/headers/params/query
//res.send()/send.File()/redirect()
  res.send('add success');
});
router.get('/list',(req,res)=>{
  res.send('list success');
});
router.get('/detail/:lid/:price',(req,res)=>{
//如何接受所传递的参数
  var id = req.params.lid;
  res.send('this is lid is '+lid);
});
//导出路由器导变化
module.exports = router;






