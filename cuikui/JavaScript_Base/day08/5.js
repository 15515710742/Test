//截取字符串 slice
/*
var str = 'hello javascript';
//console.log(str.slice(6)); //javascript
console.log(str.substring(6)); //javascript
//console.log(str.slice(6,10));//java
console.log(str.substring(6,10));//java
//console.log(str.slice(-6,-3));
console.log(str.substring(-6));//不支持负数，如果负数，自动转换成0

//查看一个邮箱的用户名和主机名
//jerry123@microsoft.com
//indexOf 和 slice
var str = 'david@microsoft.com';
//获取@所对应的下标
var index = str.indexOf('@');
//截取邮箱中的用户名
var uname = str.slice(0,index);
console.log(uname);
//截取邮箱中的主机名
var host = str.slice(index+1);
console.log(host);
*/
//通过身份号来获取出生日期 ---> 1997年10月20日
var str = '11024619971020357X';
//截取年份
var year = str.slice(6,10);
//截取月份
var month = str.slice(10,12);
//截取日期
var date = str.slice(12,14);
console.log(year+'年'+month+'月'+date+'日');

//把英文单词的首字母转换成大写
var str = 'hElLo'; //Hello
//全部转成小写
str = str.toLowerCase();
//把字符串拆分长两端
var first = str.slice(0,1);
var last = str.slice(1);
first = first.toUpperCase();
console.log(first+last);








var str = 'helLo';
var first = str.toUpperCase();
first = first.slice(0,1);
var last = str.toLowerCase();
last = last.slice(1);
console.log(first+last);



