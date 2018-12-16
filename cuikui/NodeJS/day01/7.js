//解析字符串
//借助核心模块querystring
//引用核心模块
var querystring = require('querystring');
//查询字符串
var str = 'name=tom&age=10&sex=男';
//解析http请求中的查询字符串
var res = querystring.parse(str);
console.log(res);








