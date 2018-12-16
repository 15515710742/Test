/*
var a=1;
var b=2;
var c;
c=a+b;
a=c-a;
b=c-a;
console.log('a='+a);
console.log('b='+b);

var a=1;
var b=2;
var tmp=a;
a=b;
b=tmp;
console.log('a='+a);
console.log('b='+b);
*/

//计算第18个月一共有多少对兔子？
var n1=1; //第一个月1
var n2=1; //第二个月2
for(var i=3;i<=6;i++){
//把n2存储到一个中间变量。
  var tmp = n2;
  n2=n1+n2;
  n1=tmp;
}
console.log(n2);












