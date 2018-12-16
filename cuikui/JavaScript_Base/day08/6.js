//数组按照指定格式转换成字符串
//var arr = ['tom','jerry','david'];
//console.log(arr.join['|']);
//把固定某个格式的字符串转换成数组
/*
var str = 'tom|jerry|david';
//split
var arr = str.split('|');
console.log(arr);
*/
/*
var email = 'tom@163.com';
var str = email.split('@');
console.log(str);
*/
/*
//把一句英文所有单词的首字母转换成大写
var str = 'we are fRom china';
str = str.toLowerCase();
var arr = str.split(' ');
//获取每一个数组元素，把首字母大写
for (var i=0;i<arr.length;i++){
  //arr[i] 就是每一个单词
  var first = arr[i].slice(0,1);//获取首字母
  var last = arr[i].slice(1);//剩下的部分
  first = first.toUpperCase();//把首字母转换成大写
  //把拼接后的字符串替换之前的元素
  arr[i] = first + last;
}
//最后把数组转换回字符串替换之前的元素
var res = arr.join(' ');
console.log(res);
*/
//从服务器读取出的数据
//例如：tom@补给兵@60%#Jerry@医护兵@80%#david@特种兵@100%
//要求：分割每一个角色；每个每一个角色属性
//打印出，每一个角色，每个角色占一行
/*
var str = 'tom@补给兵@60%#Jerry@医护兵@80%#david@特种兵@100%';
arr1= str.split('#');
//console.log(str1);
for(var i=0;i<arr1.length;i++){
  var arr2 = arr1[i].split('@');
//console.log(arr2);
//遍历arr2
  var str2 = '';
  for(var j=0;j<arr2.length;j++){
     str2 += arr2[j];
  }
  console.log(str2);
}
*/
/*
var str = 'we aRe froM china';
str = str.toLowerCase();
var arr = str.split(' ');
for(var i=0;i<arr.length;i++){
  var first = arr[i].slice(0,1);
  var last = arr[i].slice(1);
  first = first.toUpperCase();
  arr[i] = first+last;
}
var res = arr.join(' ');

console.log(res);
*/


var str = 'tom@补给兵@60%#Jerry@医护兵@80%#david@特种兵@100%';
arr1 = str.split('#');
//console.log(arr1);
for(var i=0;i<arr1.length;i++){
  var arr2 = arr1[i].split('@');
//  console.log(arr2);
  var str1 = '';
  for(var j=0;j<arr2.length;j++){    
	str1 += arr2[j]+' ';  
  }
  console.log(str1);
}










