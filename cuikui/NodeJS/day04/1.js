const express = require('express');
const querystring = require('querystring');
var app = express();
app.listen(3000,()=>{
  console.log('success');

});

app.get('/register',(req,res)=>{
  res.sendFile(__dirname+'/static/register.html');
});
//向服务器端发送请求方法post  url：/new
app.post('/new',(req,res)=>{
  res.send('reg success');
  console.log(req.query);
  req.on('data',(buf)=>{
    //console.log(bug.toString);
    var str = buf.toString();
    console.log(querystring.parse(str));
  });


});

app.get('/new1',(req,res)=>{
  res.send('new1 success');
  console.log(req.query);
});










