//请求数据
const http = require('http');
const fs = require('fs');
var url = 'http://www.tmooc.cn/free/';

http.get(url,(res)=>{

  //console.log(res.statusCode);
  res.on('data',(buf)=>{
	console.log(buf.toString());
    fs.appendFile('./web.txt',buf.toString(),(err)=>{
	  if (!err){
	  
	    console.log('写入成功');
	  }		
	});    
  });
});












