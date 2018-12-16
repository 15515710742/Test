/*
//打印九九乘法表
//外层循环控制的是生成的行数
for(var i=1;i<=9;i++){
//内循环控制的是生成的列数
  var str='';
  for(var j=1;j<=i;j++){
    str += j + 'x' + i + '=' + i*j + ' ';
  }
  console.log(str);
}
*/
/*
for (var i=2000;i<=2100;i++ ){
  if(i%4==0 && i%100!=0 || i%400==0){
    console.log(i);
  }
}
*/
var i=2000;
do{
  if(i%4==0 && i%100!=0 || i%400==0){
    console.log(i);
  }
  i++;
}while(i<=2100);







