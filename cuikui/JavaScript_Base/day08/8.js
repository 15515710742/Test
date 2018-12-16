//Math对象
//属性
//console.log(Math.PI);
//方法
//取绝对值
//console.log(Math.abs(-5));
//取整
//var num = 3.49999;
//console.log(parseInt(num));
//向上取整
//console.log(Math.ceil(num));
//向下取整
//console.log(Math.floor(num));
//四舍五入取整
//console.log(Math.round(num));
/*
console.log(Math.max(10,20,30,20,50));
console.log(Math.min(10,5,12,1,30));
console.log(Math.pow(2,3));
*/
//随机数
//随机点名
/*
var names = ['tom','jerry','lucy','rose','jacky','scort'];
var num = Math.random()*names.length;
num = Math.floor(num);
console.log(names[num]);
*/
/*
var count = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,
  18,19,20,21,22,23,24,25,26,27,28,29,30];
for(var i=1;i<=7;i++ ){
  var num = Math.random()*count.length;
  var res = Math.floor(num);  
  console.log(count[res]);
}
*/
//循环产生1-30
var arr = [];
for(var i=1;i<=30;i++){
  arr.push(i);
}
var newArr = [];
for(var i=0;i<7;i++){
//产生随机数
  var num = Math.random()*arr.length;
  num = Math.floor(num);
 //通过下标num来找arr数组中的元素
 // console.log(arr[num]);
  newArr.push(arr[num]);
}
console.log(newArr);
/*
//随机获取4位验证码
var arr = ['a','b','c','d','e','f','g',
'A','B','C','D','E','F','G',0,1,2,3,4,5,6,7,8,9
];
var newArr = [];
for(var i=0;i<4;i++){
  var num = Math.random()*arr.length;
  num = Math.floor(num);//随机获取下标
  newArr.push(arr[num]);
}
 console.log(newArr);
//转成字符串
var res = newArr.join('');
console.log(res);
*/

