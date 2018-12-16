const express = require('express');

var app = express();

app.listen(2000,()=>{
  console.log('创建成功');
});

const product = require('./routes/product.js');

app.use('/product',product);

