//数据类型转换
var res1 = typeof(10+'kb');
//console.log(res1);
var res2 = 2+false;
//console.log(res2);
var res3 = 'hello' + true;
//console.log(res3);
var res4 = true + false;
//console.log(res4);

var num1 = 3;
var num2 = true;
var num3 = 'hello';
var res1 = num1 + num2 + num3;
var res2 = num2 + num3 + num1;

//console.log(res1);
//console.log(res2);
var num1 = 2;
num1 = num1.toString();
//console.log(typeof(num1));
//强制转换成整型
var num2 = '53aabc123';
num2 = parseInt(num2);
//console.log(num2);
//强制转换成浮点型
var num3 = '5.3abc';
num3 = parseFloat(num3);
//console.log(num3);
//强制转换成数值型
var num4 = '5.35';
num4 = Number(num4);
console.log(num4);
console.log(typeof(num4));
