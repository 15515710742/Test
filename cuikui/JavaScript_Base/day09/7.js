//Number对象
//转换成数值型
var num1 = new Number();//Object
var num2 = new Number('2.5');//2.5
var num3 = new Number();//0
var num4 = new Number('2abc');//NaN
//console.log(num4);
//console.log(typeof(num1));
//Number让对象的成员属性
//console.log(Number.MAX_VALUE);
//console.log(Number.MIN_VALUE);
//Number对象的成员方法  
//toFixd  截取小数点后几位
var res = (0.1+0.2).toFixd(2);
console.log(res);



