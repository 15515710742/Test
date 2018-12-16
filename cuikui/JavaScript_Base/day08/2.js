//创建字符串对象
/*
var str1 = 'hello world';
var str2 =  '100';
console.log(typeof(str1));//String
console.log(typeof(str2));//String
var str3 = new String('beijing');//Object
var str4 = String('beijing');//Sring
console.log(typeof(str3));
console.log(typeof(str4));
*/
//转义字符
//var str = 'hello \n world';//  \n换行
//var str = 'hello \t world';//  \t制表符（Tab键）
//var str = 'hello \' world';
//var str = 'hello \\ world';'
//console.log(str);
//字符串转换成大小写
var str = 'Hello WoRld';
//var atr = new String('Hello WoRld');
//转换成大写
str = str.toUpperCase();
console.log(str);
//转换成小写
str = str.toLowerCase();
console.log(str);

