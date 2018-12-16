//http模块作为客户端使用——发请求
//http模块
const http = require('http');
//使用http发送请求
var url ='http://www.tmooc.cn/free/';
//使用get方式发送请求
http.get(url,(res)=>{
//使用回调函数，来获取服务器响应的结果
  console.log('相应的状态码：'+res.statusCode);
  //console.log('响应的头信息：'+res.headers);
//获取响应的主体——内容很多
//把请求的结果放入buffer中
  res.on('data',(buf)=>{
    console.log(buf.toString());
  });

});





