var lilei={};//Object --引用类型对象--可以包含自己的属性
lilei.money=10;
console.log(lilei.money);

var lilei="";//string--原始类型的值--没有自己的属性和功能
lilei.money=10;
//typeof  lilei-->string
//临时的new String(lilei).money=10
//new String释放!
console.log(lilei.money);//undefined
//typeof lilei-->string
//临时的new String(lilei).money
var lilei=[];
lilei.money=10;
console.log(lilei.money);
var lilei=100;
lilei.money=10;
console.log(lilei.money);








