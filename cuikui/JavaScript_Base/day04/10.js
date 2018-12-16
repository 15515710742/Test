//循环的嵌套
//1.循环生成5个*，成一行
/*
var str='';
for(var i=1;i<=5;i++){
  str += '*';  
}
console.log(str);
*/
//2.循环生成5行，每行都有5个*
//外层控制总共有几行
/*
for(var j=1;j<=5;j++){
  var str='';
 //内层循环控制每一行5*
  for(var i=1;i<=5;i++){
    str += '*';
  }
  console.log(str);  
}
*/
/*
var str='';
for(var i=1;i<=5;i++){
 str +='*';
 console.log(str);
}
*/

//乘法口诀表
for(var i=1;i<=9;i++){
  var str = '';
  for(var j=1;j<=i;j++){
    str += j + '*' + i + '=' + i*j + ' ';
  }
  console.log(str); 
}








