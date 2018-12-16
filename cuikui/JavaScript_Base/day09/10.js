//1.块级作用域:变量只能在块级范围使用
/*
var i=1;
for(var i=0;i<5;i++){
  console.log(i);
}
//循环结束后，i的值
console.log(i);
//ES6新增的鞋法
{
  let a= 10;
}
console.log(a);
*/
//2.箭头函数
/*
var arr = [3,18,15,9];
arr.sort(function(a,b){
  return a-b;
});
arr.sort((a,b)=>{
  return b-a;
});
*/
//arr.sort((a,b)=>a-b);
//console.log(arr);
//3.函数中的参数
/*
function fn(a,b,c=0){
  return a+b+c;
}
var res = fn(1,2,3);
console.log(res);
*/
//4.模板字符串

var os = 'win10';
var title = '戴尔灵越游匣15RP-5645B';
var str = `商品名称：${title}

商品系统：${os}
`;
console.log(str);



