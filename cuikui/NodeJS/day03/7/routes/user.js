//引入express
const express = require('express');
//使用express的路由功能
const router = express.Router();
//往router中添加路由
router.get('/list',(req,res)=>{
  res.send('this is list page');
});
//注册和登录的路由
router.get('/reg',(req,res)=>{
  res.send('this is register page');
});
router.get('/login',(req,res)=>{
  res.send('this is login page');
});
//导出
module.exports=router;






