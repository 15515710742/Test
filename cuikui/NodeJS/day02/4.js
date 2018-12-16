
//工具模块
//1.querystring
//引用模块
/*
const querystring = require('querystring');
//声明一个查询字符串
var urlStr = 'eid=3&name=张三&phone=18112345678';
//使用querystring模块中的方法解析
var obj = querystring.parse(urlStr);
console.log(obj);
*//* 
//把对像转换成查询字符串
var animal = {
  name:'小白',
  color:'white',
  age:3
}
var str = querystring.stringify(animal);
console.log(str);
*/
//2.url模块
//引入URL模块
const url  = require('url');
var urlStr = 'http://www.tmooc.cn/home/index.html?name=tom&age=18';
//使用URL模块下的方法解析
var res = url.parse(urlStr);
console.log(res.query);

var obj = {
  protocol:'http',
  hostname:'www.codeboy.com',
  pathname:'/list/1'
}
//把对像转成url
var str = url.format(obj);
console.log(str);










