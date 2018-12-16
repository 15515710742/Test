//全局函数
//对url进行编码
//var url = 'https://www.baidu.com/北京'; 
//url = encodeURI(url);//编码
//console.log(url);
//url = decodeURI(url);//对编码进行解码
//console.log(url);
/*
var str = 1+'+2';//1+2
var num = eval(str);
console.log(str);//执行字符串表达式
console.log(num);
*/
//3.isNaN判断是否为NaN
/*
var num = parseInt('a123');
var res = isNaN(num);
console.log(res);
*/
//3.isFinite,判断一个值是否为有限值
//true 有限值   false 无限值
var num = 1/0;
console.log(num);

var res = isFinite(num);
console.log(res);
