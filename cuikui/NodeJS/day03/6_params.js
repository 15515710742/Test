//
const express = require('express');
var app= express();
app.listen(3000,()=>{
  console.log('服务器创建成功');
});
//路由传参
/*app.get('/detail/:lid',(req,res)=>{
  console.log(req.params);//客户端所传递的参数
  res.send('this is product detail--'+req.params.lid);
});

app.get('/shopping/:price/:num',(req,res)=>{
 // res.send('商品价格：'+req.params.price+'  '+'商品数量：'+req.params.num);
  res.send(`
	商品价格：${req.params.price}  
	商品数量：${req.params.num}
  `);
});
*/


