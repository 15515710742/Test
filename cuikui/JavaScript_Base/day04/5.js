//for循环的其他格式
/*
①
var sum=0;
for(var i=1;i<=100;i++){
  sum += i;
}
console.log(sum);
②
for(var sum=0,i=1;i<=100;i++){
  sum += i;
}
console.log(sum);  
③
var sum=0;
var i=1;
for(;i<=100;i++){
  sum += i;
}
console.log(sum);
④
var sum = 0;
var i = 1;
for(;i<=100;){
  sum += i;
  i++;
}
console.log(sum);
⑤
var sum = 0;
var i = 1;
for(;;){
  sum += i;
  if(i==100){
    break;
  }
  i++;
}
console.log(sum);
*/


var str='';
for(var i=1;i<=9;i++){
  str += i + '*' + 9 + '=' + i*9 + ' ';
}
console.log(str);














