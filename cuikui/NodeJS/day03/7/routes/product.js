
//引入express
const express = require('express');
//使用express路由功能
const router = express.Router();
//往product中添加路由
//添加路由
router.get('/add',(req,res)=>{
  res.send('this is a add label');
});
//删除路由
router.get('/delete',(req,res)=>{
  res.send('this is a delete label');
});
//修改路由
router.get('/revise',(req,res)=>{
  res.send('this is a revise label'); 
});
//列表路由
router.get('/list',(req,res)=>{
  res.send('this is a list page');
});
//检索路由
router.get('/search',(req,res)=>{
  res.send('this is a search label');
});
//导出路由
module.exprots = router;



